import React, { useRef, useState, useEffect } from "react";
import Webcam from "react-webcam";
import AuthAnimation from "./AuthAnimation"; // Import your animation component

const FaceCaptureScreen = ({ onComplete }) => {
  const webcamRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("Align your face within the frame.");
  const [showAnimation, setShowAnimation] = useState(false);
  const [showWebcam, setShowWebcam] = useState(true);
  const [taskIndex, setTaskIndex] = useState(0);
  const [tasksCompleted, setTasksCompleted] = useState(0);
  const [tasks, setTasks] = useState([]);
  const [cameraReady, setCameraReady] = useState(false);

  const availableTasks = [
    "Turn Left",
    "Turn Right",
    "Look Up",
    "Look Down",
    "Blink",
    "Close Eyes",
    "Nod Head",
  ];

  useEffect(() => {
    // Select 2 random tasks from the available tasks
    const selectedTasks = [];
    while (selectedTasks.length < 2) {
      const randomTask =
        availableTasks[Math.floor(Math.random() * availableTasks.length)];
      if (!selectedTasks.includes(randomTask)) {
        selectedTasks.push(randomTask);
      }
    }
    setTasks(selectedTasks);
  }, []);

  useEffect(() => {
    if (cameraReady && tasks.length > 0 && tasksCompleted < 2) {
      setMessage(`Task ${tasksCompleted + 1}: ${tasks[taskIndex]}`);
      setShowWebcam(true);

      const taskTimer = setTimeout(() => {
        setShowWebcam(false);
        setShowAnimation(true);
        setLoading(true);

        const animationTimer = setTimeout(() => {
          setTasksCompleted((prev) => prev + 1);
          setTaskIndex((prev) => prev + 1);
          setShowAnimation(false);
          setLoading(false);
          setMessage(`Task ${tasksCompleted + 1}: ${tasks[taskIndex]}`);
          setShowWebcam(true); // Show webcam again for the next task
        }, 2000);

        return () => clearTimeout(animationTimer);
      }, 5000); // Show the task for 5 seconds

      return () => clearTimeout(taskTimer);
    } else if (tasksCompleted === 2) {
      setMessage("You may now verify your liveness.");
    }
  }, [cameraReady, tasks, taskIndex, tasksCompleted]);

  const handleCapture = () => {
    setMessage("Analyzing liveness...");
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      onComplete(true);
    }, 2000);
  };

  return (
    <div className="flex flex-col items-center justify-center bg-white shadow-lg p-8 rounded-lg mx-4 md:mx-auto max-w-2xl mt-3">
      <p className="bg-top-gradient h-1 relative top-0 w-[42rem] mt-[-2rem] rounded-lg"></p>
      {showAnimation ? (
        <>
          <AuthAnimation isPlaying={showAnimation} />
          <p className="mt-4 text-xl font-semibold text-gray-700">{message}</p>
        </>
      ) : (
        <>
          {showWebcam && (
            <Webcam
              audio={false}
              ref={webcamRef}
              screenshotFormat="image/jpeg"
              className="border-4 border-blue-600 rounded-lg mb-4 mt-4"
              videoConstraints={{
                facingMode: "user",
              }}
              onUserMedia={() => setCameraReady(true)} // Camera is ready
            />
          )}
          <p className="mt-4 text-xl font-semibold text-gray-700">{message}</p>
          {tasksCompleted === 2 && (
            <button
              className="mt-4 bg-[#ff8c00] text-white py-3 px-6 rounded-full hover:bg-[#db851c] transition duration-800 shadow-lg shadow-gray-400"
              onClick={handleCapture}
            >
              Verify Liveness
            </button>
          )}
        </>
      )}
    </div>
  );
};

export default FaceCaptureScreen;
