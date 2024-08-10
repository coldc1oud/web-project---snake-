const GRID_SIZE = 21;

//����λ���ڲ�����������
const onSnake = (position) => {
  for (let i = 0; i < snakeBody.length; i++) {
    if (equalPositions(position, snakeBody[i])) {
      return true;
    }
  }
  return false;
};

const equalPositions = (pos1, pos2) => {
  return pos1.x === pos2.x && pos1.y === pos2.y;
};
// �����ߣ�ʳ��ĳ���λ�ã��Լ����˶��ĳ�ʼ����
const restartpos = () => {
  snakeBody = [
   { x: 11, y: 11 },
   { x: 11, y: 10 },
   { x: 11, y: 9 },
 ];
  food = getNewFoodPosition();
  now_snake_direction = {x: 0, y: 1};
  inputDirection = { x: 0, y: 1 };
}
//�߱䳤
const growSnake = () => {
  snakeBody.push({ ...snakeBody[snakeBody.length - 1] });
};

//��ȡʳ��λ��
const getNewFoodPosition = () => {
  let randomFoodPosition = randomGridPosition();
  while (onSnake(randomFoodPosition)) {
    randomFoodPosition = randomGridPosition();
  }
  return randomFoodPosition;
};

const randomGridPosition = () => {
  return {
    x: Math.floor(Math.random() * GRID_SIZE) + 1,
    y: Math.floor(Math.random() * GRID_SIZE) + 1,
  };
};

//����Ƿ����
const outOfBounds = (position) => {
    return position.x < 1 || position.x > GRID_SIZE || position.y < 1 || position.y > GRID_SIZE;
}
const snakeOutOfBounds = () => {
    return outOfBounds(snakeBody[0]);
}
//����Ƿ�ײ���Լ�
const snakeIntersectSelf = () => {
    for (let i = 1; i < snakeBody.length; i++) {
        if (equalPositions(snakeBody[0], snakeBody[i])) {
            return true;
        }
    }
    return false;
}
//�����Ϸ��û�н���
const check_islose = () => {
    if(snakeOutOfBounds() || snakeIntersectSelf()) {
       is_start = false;
    }
}