import type { ReviewType } from '../types/review.ts';

const reviews : ReviewType[] = [
    {
        'id': '87686786-dfgfdg-42a2-b2fc-34tergbsr',
        'comment': 'Good place',
        'date': '2025-06-29T21:00:00.465Z',
        'rating': 4,
        'user': {
            'name': 'Bob',
            'avatarUrl': '/img/avatar-bob.png',
            'isPro': true
        }
    },
    {
        'id': 'gfsdgfdgqrwg-dfgfdg-23r23r-b2fc-34tergbsr',
        'comment': 'Perfect place',
        'date': '2025-07-29T21:00:00.465Z',
        'rating': 5,
        'user': {
            'name': 'Ivan',
            'avatarUrl': '/img/avatar-ivan.png',
            'isPro': true
        }
    }
];

export { reviews };