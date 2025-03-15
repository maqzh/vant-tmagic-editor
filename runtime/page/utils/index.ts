// 为 ImportMeta 添加 env 属性的类型声明
declare global {
  interface ImportMeta {
    env: {
      VITE_API_PATH: string;
    };
  }
}
const { VITE_API_PATH } = import.meta.env;

export const getConfig = (): Promise<any> => {
  return fetch(`${VITE_API_PATH}/api/form/action/getFormData`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({})
  }).then((response: Response) => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
};
