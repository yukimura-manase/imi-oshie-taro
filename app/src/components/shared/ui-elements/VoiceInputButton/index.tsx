import styles from './style.module.css'

type VoiceInputButtonProps = {
    isRecording: boolean;
    handleToggleRecording: () => void;
}

const VoiceInputButton = ({ isRecording, handleToggleRecording }: VoiceInputButtonProps): JSX.Element => {
  
  return (
    <div className={styles.container}>
          {isRecording ? (
            // Button for stopping recording
            <button
              onClick={handleToggleRecording}
              className={styles.stop}
            >
              <svg
                className={styles.stopIcon}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fill="white" d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
              </svg>
            </button>
          ) : (
            // Button for starting recording
            <button
              onClick={handleToggleRecording}
              className={styles.start}
            >
              <svg
                viewBox="0 0 256 256"
                xmlns="http://www.w3.org/2000/svg"
                className={styles.startIcon}
              >
                <path
                  fill="currentColor" // Change fill color to the desired color
                  d="M128 176a48.05 48.05 0 0 0 48-48V64a48 48 0 0 0-96 0v64a48.05 48.05 0 0 0 48 48ZM96 64a32 32 0 0 1 64 0v64a32 32 0 0 1-64 0Zm40 143.6V232a8 8 0 0 1-16 0v-24.4A80.11 80.11 0 0 1 48 128a8 8 0 0 1 16 0a64 64 0 0 0 128 0a8 8 0 0 1 16 0a80.11 80.11 0 0 1-72 79.6Z"
                />
              </svg>
            </button>
          )}
        </div>
  )
}

export default VoiceInputButton
