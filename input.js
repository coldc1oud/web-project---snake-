// ��ǰ���밴����Ӧ�ķ���
let inputDirection = { x: 0, y: 1 };

//��Ҳٿذ�������
window.addEventListener('keydown', (event) => {
  console.log(event.key);
  //����ط�ò�ƿγ̸��Ĵ����е�覴ã�ԭ��������
  //if (event.key === 'ArrowUp' && inputDirection.x !== 0) ������
  //������ʹ�ù����лᷢ�����������update�м������ٶȹ���Ļ����ᵼ��һЩ���⣺
  //���������ߵķ����ǳ��ң���������˵��ʱ���������û�з�Ӧ�ģ����������ʱ���ٵ����������ϻ����·�������ٴΰ��󣬾ͻᵼ����ֱ��������
  //��������ط��Ƚϵķ���״̬Ӧ���Ǹ��º��״̬�������Ǽ��̵ļ���״̬
      if (event.key === 'ArrowUp' && now_snake_direction.x !== 0) {
        inputDirection = { x: 0, y: -1 };
      } else if (event.key === 'ArrowDown' && now_snake_direction.x !== 0) {
        inputDirection = { x: 0, y: 1 };
      } else if (event.key === 'ArrowRight' && now_snake_direction.y !== 0) {
        inputDirection = { x: 1, y: 0 };
      } else if (event.key === 'ArrowLeft' && now_snake_direction.y !== 0) {
        inputDirection = { x: -1, y: 0 };
      }
  
});

const getInputDirection = () => {
  return inputDirection;
};
