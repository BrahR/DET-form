<script setup lang="ts">
import QuestionMakerFooter from "@/components/question/QuestionMakerFooter.vue";

import Dialog from "@/components/Dialog.vue";
import CloseModal from "@/components/question/CloseModal.vue";

import { useQuestionStore } from "@/store/question";
import type { QuestionType } from "@/types/store/question";
import { watchEffect, provide, watch, ref } from "vue";

const props = defineProps<{
  open: boolean;
  type: QuestionType | null;
}>();

defineEmits<{
  (event: "close"): void;
}>();

const useQuestion = useQuestionStore();
// useQuestion.hydrate(props.type);

watchEffect(() => {
  useQuestion.hydrate(props.type);
});

provide("question", useQuestion);
</script>

<template>
  <Dialog
    v-if="useQuestion.isHydrated"
    :show="open"
    :full="true"
    @close="$emit('close')"
  >
    <div class="addOrEditQuestionModal_modal_overlay__rgQs8">
      <div
        class="addOrEditQuestionModal_modal_wrapper__KK2G8"
        tabindex="-1"
        role="dialog"
        aria-modal="true"
      >
        <div class="sharedIndex_content__3SCeJ sharedIndex_ltr__mCCAr">
          <div class="sharedIndex_sidebar__DMD9M sharedIndex_ltr__mCCAr">
            <div class="questionHeader_header__KdSai">
              <div class="questionHeader_title__f0ZQh">
                <CloseModal />
                <div
                  class="questionHeader_question_header_wrapper__44dEG questionHeader_ltr__T3Sam"
                >
                  <component
                    :is="{ ...useQuestion.getIcon }"
                    :number="1"
                  ></component>
                  <div
                    class="questionHeader_name__Znclc questionHeader_ltr__T3Sam"
                  >
                    {{ useQuestion.getName }}
                  </div>
                </div>
              </div>
              <div class="questionHeader_mobile_navbar__G6_dM">
                <div
                  class="questionHeader_navbar_item__2K8Sa questionHeader_active__X_qz1"
                >
                  Create
                </div>
                <div class="questionHeader_navbar_item__2K8Sa">Preview</div>
              </div>
            </div>
            <div class="sharedIndex_content__3SCeJ">
              <div
                :class="{ skeleton: useQuestion.isLoading }"
                class="sharedIndex_questions_content__TPf69"
              >
                <div v-if="!useQuestion.isLoading">
                  <div class="sharedBuild_questions_content__brpUH">
                    <div class="sharedBuild_build_content__A2KQg">
                      <template
                        v-for="(component, index) in useQuestion.getComponents"
                      >
                        <component
                          :is="{ ...component, key: index }"
                        ></component>
                      </template>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <QuestionMakerFooter @close="$emit('close')" />
          </div>
          <div class="sharedIndex_preview__HrJbC sharedIndex_ltr__mCCAr">
            <div class="sharedIndex_preview_buttons__S_Qr_">
              <div class="previewButtonGroup_preview_button_group__3ggkH">
                <div
                  class="selectionButtonGroup_buttons_wrapper__jbKNI selectionButtonGroup_ltr__V3WKz selectionButtonGroup_white__LXFXJ"
                >
                  <button
                    type="button"
                    class="selectionButtonGroup_selected_tab__BT9Pz"
                  >
                    <div class="previewButtonGroup_svg_on__34F_H">
                      <svg
                        class="m-auto"
                        width="24"
                        height="24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g fill="none" fill-rule="evenodd">
                          <path d="M0 0h24v24H0z"></path>
                          <g
                            transform="translate(3.429 4)"
                            stroke="#3E434D"
                            stroke-linejoin="round"
                          >
                            <rect
                              stroke-linecap="round"
                              width="17.143"
                              height="12"
                              rx="2"
                            ></rect>
                            <path stroke-linecap="round" d="M4.571 16h8"></path>
                            <path
                              stroke-linecap="square"
                              d="M8.571 13v3"
                            ></path>
                          </g>
                        </g>
                      </svg>
                    </div>
                  </button>
                  <button
                    type="button"
                    class="selectionButtonGroup_selected_tab__BT9Pz"
                  >
                    <div class="false">
                      <svg
                        class="m-auto"
                        width="24"
                        height="24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g fill="none" fill-rule="evenodd">
                          <path d="M0 0h24v24H0z"></path>
                          <g transform="translate(7 5)">
                            <rect
                              stroke="#3E434D"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              width="10"
                              height="15"
                              rx="2"
                            ></rect>
                            <rect
                              fill="#3E434D"
                              x="3"
                              y="12"
                              width="4"
                              height="1"
                              rx=".5"
                            ></rect>
                          </g>
                        </g>
                      </svg>
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <div
              class="sharedIndex_background__565mZ sharedIndex_animation__KSN1B sharedIndex_ltr__mCCAr"
            ></div>
            <div class="sharedIndex_question__ROyXE">
              <component :is="{ ...useQuestion.getPreview }"></component>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Dialog>
</template>

<style scoped>
* {
  box-sizing: content-box;
}

.ReactModal__Overlay {
  opacity: 0;
  transition: opacity 0.4s ease-in-out;
}
.ReactModal__Overlay--after-open {
  opacity: 1;
}
.questionHeader_header__KdSai .questionHeader_title__f0ZQh {
  display: flex;
  justify-content: flex-start;
  box-shadow: inset 0 -0.125rem 0 0 #f0f2f5;
  position: relative;
  height: 3.5rem;
  align-items: center;
}
.questionHeader_header__KdSai .questionHeader_mobile_navbar__G6_dM {
  display: none;
}
.questionHeader_header__KdSai .questionHeader_question_header_wrapper__44dEG {
  align-items: center;
  display: flex;
  padding: 0 0.25rem;
  font-family: inherit;
  font-size: 14px;
  font-weight: 700;
}
.questionHeader_header__KdSai
  .questionHeader_question_header_wrapper__44dEG
  .questionHeader_name__Znclc {
  align-items: center;
  display: flex;
  margin-right: 0.5rem;
}
.questionHeader_header__KdSai
  .questionHeader_question_header_wrapper__44dEG
  .questionHeader_name__Znclc.questionHeader_ltr__T3Sam {
  margin-right: 0;
  margin-left: 0.5rem;
}
.questionHeader_header__KdSai
  .questionHeader_question_header_wrapper__44dEG.questionHeader_ltr__T3Sam {
  direction: ltr;
}
@media (max-width: 1024px) {
  .questionHeader_header__KdSai .questionHeader_mobile_navbar__G6_dM {
    display: flex;
    box-shadow: inset 0 -0.125rem 0 0 #f0f2f5;
    width: 100%;
    height: 3rem;
    padding: 0 2rem;
  }
  .questionHeader_header__KdSai
    .questionHeader_mobile_navbar__G6_dM
    .questionHeader_navbar_item__2K8Sa {
    justify-content: flex-start;
    align-items: center;
    padding: 0.75rem;
    box-sizing: border-box;
    display: flex;
    height: 100%;
    cursor: pointer;
    position: relative;
    font-size: 14px;
  }
  .questionHeader_header__KdSai
    .questionHeader_mobile_navbar__G6_dM
    .questionHeader_navbar_item__2K8Sa.questionHeader_active__X_qz1 {
    color: #3b368e;
    position: relative;
  }
  .questionHeader_header__KdSai
    .questionHeader_mobile_navbar__G6_dM
    .questionHeader_navbar_item__2K8Sa.questionHeader_active__X_qz1:before {
    position: absolute;
    content: "";
    width: 100%;
    height: 0.2rem;
    bottom: 0;
    left: 0;
    background-color: #3b368e;
    border-radius: 1rem 1rem 0 0;
  }
}
.sharedBuild_questions_content__brpUH {
  flex-grow: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.selectionButtonGroup_buttons_wrapper__jbKNI {
  display: flex;
  width: 100%;
}
.selectionButtonGroup_buttons_wrapper__jbKNI button {
  margin: 0;
  flex-grow: 1;
  width: 0;
  cursor: pointer;
  padding: 0.25rem 0;
  font-family: unset;
  font-size: 14px;
  border-radius: 0;
  scrollbar-width: none;
}
.selectionButtonGroup_buttons_wrapper__jbKNI button:focus {
  outline: none;
}
.selectionButtonGroup_buttons_wrapper__jbKNI button:first-child {
  border-radius: 0 0.25rem 0.25rem 0;
}
.selectionButtonGroup_buttons_wrapper__jbKNI button:last-child,
.selectionButtonGroup_buttons_wrapper__jbKNI.selectionButtonGroup_ltr__V3WKz
  button:first-child {
  border-radius: 0.25rem 0 0 0.25rem;
}
.selectionButtonGroup_buttons_wrapper__jbKNI.selectionButtonGroup_ltr__V3WKz
  button:last-child {
  border-radius: 0 0.25rem 0.25rem 0;
}
.selectionButtonGroup_buttons_wrapper__jbKNI.selectionButtonGroup_white__LXFXJ
  button {
  border: none;
  background-color: #fff;
}
@media (max-width: 1024px) {
  .selectionButtonGroup_buttons_wrapper__jbKNI button {
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }
  .selectionButtonGroup_buttons_wrapper__jbKNI button:focus {
    outline: none;
  }
}
.previewButtonGroup_preview_button_group__3ggkH {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  width: 5rem;
}
.previewButtonGroup_preview_button_group__3ggkH button {
  background-color: #fff;
  width: 2rem;
  height: 2rem;
  padding: 0.25rem;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
}
.previewButtonGroup_preview_button_group__3ggkH
  button
  .previewButtonGroup_svg_on__34F_H
  svg
  g
  g {
  stroke: #3b368e;
}
.previewButtonGroup_preview_button_group__3ggkH
  button
  .previewButtonGroup_svg_on__34F_H
  svg
  g
  g
  rect:first-child {
  fill: #3b368e;
  fill-opacity: 0.15;
}
.previewButtonGroup_preview_button_group__3ggkH button:focus {
  outline: none;
}
.sharedIndex_content__3SCeJ {
  display: flex;
  height: 100%;
  width: 100%;
  background-color: #fff;
  border-radius: 0.5rem;
}
.sharedIndex_content__3SCeJ.sharedIndex_ltr__mCCAr {
  direction: ltr;
}
.sharedIndex_content__3SCeJ .sharedIndex_sidebar__DMD9M {
  display: flex;
  align-items: stretch;
  flex-direction: column;
  width: 22.5rem;
  height: 100%;
  border-radius: 0 0.5rem 0.5rem 0;
  background-color: #fff;
  justify-content: stretch;
  border-left: 0.0625rem solid #f0f2f5;
}
.sharedIndex_content__3SCeJ .sharedIndex_sidebar__DMD9M.sharedIndex_ltr__mCCAr {
  border-radius: 0.5rem 0 0 0.5rem;
  border-left: none;
  border-right: 0.0625rem solid #f0f2f5;
}
.sharedIndex_content__3SCeJ
  .sharedIndex_sidebar__DMD9M
  .sharedIndex_content__3SCeJ {
  overflow-y: auto;
  flex-grow: 1;
  padding: 0 1rem;
  box-sizing: border-box !important;
  scrollbar-gutter: stable both-edges;
}
.sharedIndex_content__3SCeJ
  .sharedIndex_sidebar__DMD9M
  .sharedIndex_content__3SCeJ::-webkit-scrollbar {
  width: 1.5rem;
}
.sharedIndex_content__3SCeJ
  .sharedIndex_sidebar__DMD9M
  .sharedIndex_content__3SCeJ::-webkit-scrollbar-track {
  box-shadow: inset 0 0 0.5rem 0.5rem transparent;
}
.sharedIndex_content__3SCeJ
  .sharedIndex_sidebar__DMD9M
  .sharedIndex_content__3SCeJ::-webkit-scrollbar-thumb {
  box-shadow: inset 0 0 0.5rem 0.5rem #f0f2f5;
  border: 0.5rem solid transparent;
  border-radius: 1rem;
  min-height: 2rem;
}
.sharedIndex_content__3SCeJ
  .sharedIndex_sidebar__DMD9M
  .sharedIndex_content__3SCeJ::-webkit-scrollbar {
  width: 0.75rem !important;
}
.sharedIndex_content__3SCeJ
  .sharedIndex_sidebar__DMD9M
  .sharedIndex_content__3SCeJ::-webkit-scrollbar-thumb {
  border: 0.2rem solid transparent !important;
}
.sharedIndex_content__3SCeJ
  .sharedIndex_sidebar__DMD9M
  .sharedIndex_questions_content__TPf69 {
  display: flex;
  flex-direction: column;
  width: 100%;
}
.sharedIndex_content__3SCeJ .sharedIndex_preview__HrJbC {
  border-radius: 0.5rem 0 0 0.5rem;
  background-color: #eef0f5;
  display: flex;
  height: 100%;
  width: calc(100% - 22.5625rem);
  align-items: center;
  line-height: var(--preview-line-height);
  position: relative;
}
.sharedIndex_content__3SCeJ .sharedIndex_preview__HrJbC.sharedIndex_ltr__mCCAr {
  border-radius: 0 0.5rem 0.5rem 0;
}
.sharedIndex_content__3SCeJ
  .sharedIndex_preview__HrJbC
  .sharedIndex_preview_buttons__S_Qr_ {
  z-index: 99;
  position: absolute;
  top: 0;
  left: calc(50% - 2.5rem);
  margin-top: 0.75rem;
}
.sharedIndex_content__3SCeJ
  .sharedIndex_preview__HrJbC
  .sharedIndex_background__565mZ {
  position: absolute;
  height: 100%;
  width: 100%;
  left: 0;
  border-radius: 0.5rem 0 0 0.5rem;
  background-color: var(--preview-theme-background-color);
  background-image: var(--preview-theme-background-image);
  background-position: var(--preview-theme-background-position);
  background-size: var(--preview-theme-background-size);
  background-repeat: var(--preview-theme-background-repeat);
  opacity: var(--preview-theme-background-opacity);
}
.sharedIndex_content__3SCeJ
  .sharedIndex_preview__HrJbC
  .sharedIndex_background__565mZ.sharedIndex_ltr__mCCAr {
  border-radius: 0 0.5rem 0.5rem 0;
}
.sharedIndex_content__3SCeJ
  .sharedIndex_preview__HrJbC
  .sharedIndex_question__ROyXE {
  position: absolute;
  padding: 2rem 4rem;
  box-sizing: border-box;
  width: 100%;
  /*overflow-y: auto;*/
  max-height: calc(100% - 4rem);
  scrollbar-width: none;
  font-family: var(--preview-theme-font-family) !important;
  font-size: var(--preview-theme-font-size) !important;
  direction: rtl;
}
.sharedIndex_content__3SCeJ
  .sharedIndex_preview__HrJbC
  .sharedIndex_question__ROyXE::-webkit-scrollbar {
  width: 0;
}
@media (max-width: 1024px) {
  .sharedIndex_content__3SCeJ {
    border-radius: 0;
    flex-wrap: wrap;
  }
  .sharedIndex_content__3SCeJ .sharedIndex_sidebar__DMD9M {
    width: 100%;
    height: 100%;
    border-radius: 0 !important;
  }
}
.addOrEditQuestionModal_modal_overlay__rgQs8 {
  position: fixed;
  display: flex;
  justify-content: center;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  align-items: center;
}
.addOrEditQuestionModal_modal_overlay__rgQs8
  .addOrEditQuestionModal_modal_wrapper__KK2G8 {
  border-radius: 0.5rem;
  width: 100%;
  height: 100%;
  color: #3e434d;
}
@media (max-width: 1024px) {
  .addOrEditQuestionModal_modal_overlay__rgQs8 {
    padding: 0;
  }
  .addOrEditQuestionModal_modal_overlay__rgQs8
    .addOrEditQuestionModal_modal_wrapper__KK2G8 {
    flex-direction: column;
    border-radius: 0;
    height: 100%;
    width: 100%;
  }
}
</style>
