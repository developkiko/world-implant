const TOKEN = process.env.NEXT_PUBLIC_TG_BOT_TOKEN;
const CHAT_ID = -1001394974009;

const FormHandler = async (data: string) => {
  const response = await fetch(
    `https://api.telegram.org/bot${TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${encodeURIComponent(data)}`
  );
  return response.ok;
};

export default FormHandler;