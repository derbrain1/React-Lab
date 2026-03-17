import fs from "fs";
import YAML from "yaml";
import { faker } from "@faker-js/faker";

const SWAGGER_PATH = "docs/swagger.yaml";

function genLoginExample() {
  return {
    email: faker.internet.email(),
    password: faker.internet.password({ length: 10 }),
  };
}

function genOfferExample() {
  const amenities = [
    'Breakfast', 
    'Air conditioning', 
    'Laptop friendly workspace', 
    'Baby seat', 
    'Washer', 
    'Towels', 
    'Fridge'
  ];
  
  return {
    title: faker.lorem.words(3),
    description: faker.lorem.paragraph(),
    publishDate: faker.date.recent().toISOString().slice(0, 10),
    city: faker.helpers.arrayElement(['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf']),
    isPremium: faker.datatype.boolean(),
    isFavorite: faker.datatype.boolean(),
    rating: Number(faker.number.float({ min: 1, max: 5, fractionDigits: 1 })),
    type: faker.helpers.arrayElement(["apartment", "house", "room", "hotel"]),
    rooms: faker.number.int({ min: 1, max: 5 }),
    guests: faker.number.int({ min: 1, max: 8 }),
    price: faker.number.int({ min: 125, max: 500 }),
    features: faker.helpers.arrayElements(amenities, faker.number.int({ min: 3, max: 5 })).join(','),
    commentsCount: faker.number.int({ min: 0, max: 50 }),
    latitude: Number(faker.location.latitude()),
    longitude: Number(faker.location.longitude()),
    userId: faker.number.int({ min: 1, max: 2 })
  };
}

function genRegisterExample() {
  return {
    email: faker.internet.email(),
    password: faker.internet.password({ length: 10 }),
    username: faker.internet.username(),
    userType: faker.helpers.arrayElement(['pro', 'regular'])
  };
}

const raw = fs.readFileSync(SWAGGER_PATH, "utf-8");
const doc = YAML.parse(raw);

const loginContent = doc?.paths?.["/login"]?.post?.requestBody?.content?.["application/json"];
if (loginContent) {
  loginContent.example = genLoginExample();
  console.log("Пример для POST /login сгенерирован");
} else {
  console.error("Ошибка");
}

const offerContent = doc?.paths?.["/offers"]?.post?.requestBody?.content?.["multipart/form-data"];

if (offerContent) {
  const example = genOfferExample();

  if (offerContent.schema && offerContent.schema.properties) {
    Object.keys(offerContent.schema.properties).forEach(key => {
      if (example[key] !== undefined && key !== 'previewImage' && key !== 'photos') {
        offerContent.schema.properties[key].example = example[key];
      }
    });
  }

  offerContent.examples = {
    generated: {
      summary: "Сгенерированный пример (только текстовые поля)",
      value: example,
    },
  };
  
  console.log("Пример для POST /offers сгенерирован");
} else {
  console.error("Ошибка");
}

const registerContent = doc?.paths?.["/register"]?.post?.requestBody?.content?.["multipart/form-data"];

if (registerContent) {
  const example = genRegisterExample();

  if (registerContent.schema && registerContent.schema.properties) {
    Object.keys(registerContent.schema.properties).forEach(key => {
      if (example[key] !== undefined && key !== 'avatar') {
        registerContent.schema.properties[key].example = example[key];
      }
    });
  }

  registerContent.examples = {
    generated: {
      summary: "Сгенерированный пример (текстовые поля)",
      value: example,
    },
  };
  
  console.log("Пример для POST /register сгенерирован");
} else {
  console.error("Ошибка при обработке /register");
}

fs.writeFileSync(SWAGGER_PATH, YAML.stringify(doc), "utf-8");