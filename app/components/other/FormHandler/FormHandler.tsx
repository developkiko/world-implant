const TOKEN = "5438803182:AAH1x-P2VW0Z9HTFoIrhqzf_lGms51ZzQtQ";
const CHAT_ID = -1001394974009;

const FormHandler = async (data: string) => {
  const response = await fetch(
    `https://api.telegram.org/bot${TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${encodeURIComponent(data)}`
  );
  return response.ok;
};

export default FormHandler;