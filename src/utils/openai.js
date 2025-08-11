import OpenAI from 'openai';

const a4f_base_url = import.meta.env.VITE_A4F_BASE_URL;

const openai = new OpenAI({
  apiKey: import.meta.env.VITE_A4F_KEY,
  baseURL: a4f_base_url,  
  dangerouslyAllowBrowser: true, 
});



export default openai;

