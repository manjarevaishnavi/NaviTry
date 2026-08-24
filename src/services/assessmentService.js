import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";

export async function saveAssessmentResult({ answers, scores, matches }) {
  try {
    const docRef = await addDoc(
      collection(db, "assessmentResults"),
      {
        answers,
        scores,

        matches: matches.map((career) => ({
          id: career.id,
          name: career.name,
          fit: career.fit
        })),

        completedAt: serverTimestamp()
      }
    );

    console.log("Assessment saved with ID:", docRef.id);

    return docRef.id;
  } catch (error) {
    console.error("Error saving assessment:", error);
    throw error;
  }
}