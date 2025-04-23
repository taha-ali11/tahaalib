/**
 * Handles saving feedback to a text file
 * In a real application, this would send data to a server
 */
export const saveFeedback = (name: string, email: string, message: string): Promise<boolean> => {
  return new Promise((resolve) => {
    // Format the feedback data
    const feedbackText = `
Name: ${name}
Email: ${email}
Message: ${message}
Date: ${new Date().toLocaleString()}
-----------------------------------
`;

    console.log('Feedback saved:', feedbackText);
    
    // In a real application, this would send data to a server
    // For now, we'll just simulate a successful save
    setTimeout(() => {
      resolve(true);
    }, 500);
  });
};