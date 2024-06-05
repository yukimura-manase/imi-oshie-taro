"use client";

import VoiceInputButton from "../../ui-elements/VoiceInputButton";
import VoiceInputView from "../../ui-elements/VoiceInputView";
import useSpeechRecognition from "@/hooks/useSpeechRecognition";

import styles from './style.module.css'
import { useEffect, useState } from "react";

// Declare a global interface to add the webkitSpeechRecognition property to the Window object
declare global {
  interface Window {
    webkitSpeechRecognition: any;
  }
}

type VoiceInputProps = {
  setQuestion: (question: string) => void;
};

export default function VoiceInput({ setQuestion }: VoiceInputProps): JSX.Element {
  const { isRecording, recordingComplete, transcript, handleToggleRecording } = useSpeechRecognition();


  return (
    <div className={styles.outter}>
      <div className={styles.inner}>
        <VoiceInputView
        isRecording={isRecording}
        recordingComplete={recordingComplete}
        transcript={transcript} />
        <VoiceInputButton
        isRecording={isRecording}
        handleToggleRecording={handleToggleRecording} />
      </div>
    </div>
  );
}
