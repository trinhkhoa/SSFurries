import { Participant as TParticipant } from "../api/participant/Participant";

export const PARTICIPANT_TITLE_FIELD = "furryName";

export const ParticipantTitle = (record: TParticipant): string => {
  return record.furryName?.toString() || String(record.id);
};
