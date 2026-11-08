const PHOTO_COUNT = 25;
const MIN_LIKES = 15;
const MAX_LIKES = 200;
const MIN_COMMENTS = 0;
const MAX_COMMENTS = 30;
const MIN_AVATAR = 1;
const MAX_AVATAR = 6;

const DESCRIPTIONS = [
  'Отличный день на пляже!',
  'Мой завтрак сегодня.',
  'Гуляем с друзьями по парку.',
  'Красивый закат из окна.',
  'Котик спит на диване.',
  'Новое путешествие начинается!'
];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const NAMES = [
  'Артём',
  'Иван',
  'Мария',
  'Кекс',
  'Анна',
  'Дмитрий',
  'Елена',
  'Алексей'
];

let currentCommentId = 1;

function getRandomInteger(min, max) {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
}

function getRandomArrayElement(elements) {
  return elements[getRandomInteger(0, elements.length - 1)];
}

function createMessage() {
  const sentenceCount = getRandomInteger(1, 2);
  const firstSentence = getRandomArrayElement(MESSAGES);

  if (sentenceCount === 1) {
    return firstSentence;
  }

  let secondSentence = getRandomArrayElement(MESSAGES);

  if (secondSentence === firstSentence) {
    secondSentence = getRandomArrayElement(MESSAGES);
  }

  return `${firstSentence} ${secondSentence}`;
}

function createComment() {
  const comment = {
    id: currentCommentId,
    avatar: `img/avatar-${getRandomInteger(MIN_AVATAR, MAX_AVATAR)}.svg`,
    message: createMessage(),
    name: getRandomArrayElement(NAMES)
  };

  currentCommentId++;

  return comment;
}

function createPhotoDescription(id) {
  const comments = [];
  const commentsCount = getRandomInteger(MIN_COMMENTS, MAX_COMMENTS);

  for (let i = 0; i < commentsCount; i++) {
    comments.push(createComment());
  }

  return {
    id: id,
    url: `photos/${id}.jpg`,
    description: getRandomArrayElement(DESCRIPTIONS),
    likes: getRandomInteger(MIN_LIKES, MAX_LIKES),
    comments: comments
  };
}

function createPhotos() {
  const photos = [];

  for (let i = 1; i <= PHOTO_COUNT; i++) {
    photos.push(createPhotoDescription(i));
  }

  return photos;
}

createPhotos();
