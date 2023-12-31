import type { EditorType } from "./EditorType";
import type { QuestionPayload } from "./QuestionPayload";
import type { Component } from "vue";

export interface GenericQuestion {
  type: string;
  name: string;
  preview: Component;
  icon: Component;
  action: boolean;
  labeled: {
    on: boolean;
    editor: EditorType;
    error: string | null;
  };
  described: {
    on: boolean;
    editor: EditorType;
    error?: string;
  };
  imageOrVideo: {
    on: boolean;
  };
  components: Component[];
  canSubmit: boolean;
  getData: QuestionPayload | null;
}
