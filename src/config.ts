import { env } from "@blaxel/core";
import dotenv from "dotenv";
dotenv.config();

export const zendeskConfig = {
  username: env.ZENDESK_USERNAME!,
  token: env.ZENDESK_API_TOKEN!,
  remoteUri: env.ZENDESK_URI!,
};
