import OpenAI from 'openai';
import { OPENAI_KEY } from './constants';

// function that will help you make api call.this is setup
const aiApi = new OpenAI({
  apiKey: OPENAI_KEY,
  dangerouslyAllowBrowser: true // This is the default and can be omitted
});

export default aiApi;