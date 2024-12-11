import { Message as TMessage } from "../api/message/Message";

export const MESSAGE_TITLE_FIELD = "senderName";

export const MessageTitle = (record: TMessage): string => {
  return record.senderName?.toString() || String(record.id);
};
