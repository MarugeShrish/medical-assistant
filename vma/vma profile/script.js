// Dummy user data
let user = {
    name: "User",
    age: "N/A",
    symptoms: "N/A",
};

// Profile Functions add some more health problems to the code  
function toggleEditProfile() {
    const editProfile = document.getElementById("edit-profile");
    const profileDetails = document.getElementById("profile-details");

    if (editProfile.style.display === "none") {
        editProfile.style.display = "block";
        profileDetails.style.display = "none";
    } else {
        editProfile.style.display = "none";
        profileDetails.style.display = "block";
    }
}

function saveProfile() {
    const name = document.getElementById("edit-name").value;
    const age = document.getElementById("edit-age").value;
    const symptoms = document.getElementById("edit-symptoms").value;

    if (name) user.name = name;
    if (age) user.age = age;
    if (symptoms) user.symptoms = symptoms;

    document.getElementById("profile-name").innerText = user.name;
    document.getElementById("profile-age").innerText = user.age;
    document.getElementById("profile-symptoms").innerText = user.symptoms;

    toggleEditProfile();
}

// Chatbot Functions
function sendMessage() {
    const userInput = document.getElementById("user-query").value;
    const chatBox = document.getElementById("chat-box");

    if (!userInput.trim()) return;

    // Add user's message
    const userMsg = document.createElement("p");
    userMsg.className = "user-msg";
    userMsg.innerText = userInput;
    chatBox.appendChild(userMsg);

    // Generate bot response
    setTimeout(() => {
        const botMsg = document.createElement("p");
        botMsg.className = "bot-msg";
        botMsg.innerText = getBotResponse(userInput);
        chatBox.appendChild(botMsg);

        chatBox.scrollTop = chatBox.scrollHeight; // Scroll to latest message
    }, 1000);

    document.getElementById("user-query").value = "";
}

function getBotResponse(input) {
    // Extended medical chatbot logic
    input = input.toLowerCase();

    // Health Problems and Precautions
    if (input.includes("fever")) {
        return "For fever, please take Paracetamol 500mg every 6 hours and drink plenty of water.";
    } else if (input.includes("cold")) {
        return "For cold, take rest, drink warm fluids, and consider antihistamines.";
    } else if (input.includes("headache")) {
        return "For headache, take Ibuprofen 200mg and avoid stress.";
    } else if (input.includes("stomach pain")) {
        return "For stomach pain, avoid spicy food, stay hydrated, and consider taking antacids.";
    } else if (input.includes("diabetes")) {
        return "For diabetes, maintain a healthy diet, exercise regularly, and monitor blood sugar levels.";
    } else if (input.includes("hypertension")) {
        return "For hypertension, reduce salt intake, exercise, and take prescribed medications.";
    } else if (input.includes("anxiety")) {
        return "For anxiety, practice relaxation techniques, avoid caffeine, and seek counseling if needed.";
    } else if (input.includes("asthma")) {
        return "For asthma, avoid allergens, use an inhaler as prescribed, and monitor symptoms regularly.";
    } else if (input.includes("back pain")) {
        return "For back pain, maintain proper posture, avoid heavy lifting, and apply heat or cold therapy.";
    } else if (input.includes("arthritis")) {
        return "For arthritis, exercise regularly, maintain a healthy weight, and take pain relief medication as prescribed.";
    } else if (input.includes("sore throat")) {
        return "For sore throat, drink warm fluids, gargle with salt water, and use throat lozenges.";
    } else if (input.includes("sinusitis")) {
        return "For sinusitis, stay hydrated, use saline nasal sprays, and take decongestants.";
    } else if (input.includes("gout")) {
        return "For gout, avoid purine-rich foods, take prescribed medications, and stay hydrated.";
    } else if (input.includes("migraine")) {
        return "For migraine, avoid triggers, take pain-relief medications, and rest in a quiet room.";
    } else if (input.includes("epilepsy")) {
        return "For epilepsy, take anticonvulsant medications as prescribed, avoid triggers.";
    } else if (input.includes("insomnia")) {
        return "For insomnia, follow good sleep hygiene, avoid caffeine, and try relaxation techniques.";
    } else if (input.includes("pneumonia")) {
        return "For pneumonia, rest, drink fluids, and follow doctor's instructions for antibiotics.";
    } else if (input.includes("diarrhea")) {
        return "For diarrhea, stay hydrated with oral rehydration salts, avoid fatty foods.";
    } else if (input.includes("appendicitis")) {
        return "If you suspect appendicitis, seek immediate medical attention, and avoid eating or drinking.";
    } else if (input.includes("stroke")) {
        return "For stroke, seek immediate medical attention, take prescribed medications, and participate in rehabilitation.";
    } else if (input.includes("heart attack")) {
        return "For heart attack, seek emergency medical help, follow post-care instructions, and maintain heart-healthy habits.";
    } else if (input.includes("cancer")) {
        return "For cancer, follow prescribed treatments, maintain good nutrition, and seek emotional support.";
    } else if (input.includes("chronic pain")) {
        return "For chronic pain, take pain relief medications as prescribed, practice relaxation techniques.";
    } else if (input.includes("urinary tract infection")) {
        return "For UTI, drink plenty of fluids, take antibiotics as prescribed, and avoid irritants.";
    } else if (input.includes("irritable bowel syndrome")) {
        return "For IBS, avoid trigger foods, eat fiber-rich meals, and manage stress.";
    } else if (input.includes("allergies")) {
        return "For allergies, identify and avoid triggers, use antihistamines, and seek allergy treatments.";
    } else if (input.includes("coughing")) {
        return "For a persistent cough, drink honey lemon tea, stay hydrated, and seek medical advice if symptoms persist.";
    } else if (input.includes("tuberculosis")) {
        return "For tuberculosis, complete the prescribed course of antibiotics and follow doctor’s guidance.";
    } else if (input.includes("chickenpox")) {
        return "For chickenpox, avoid scratching, keep skin clean, and take antihistamines to relieve itching.";
    } else if (input.includes("whooping cough")) {
        return "For whooping cough, take prescribed antibiotics, rest, and avoid close contact with others.";
    } else if (input.includes("dengue")) {
        return "For dengue, stay hydrated, take acetaminophen for pain, and seek immediate medical care if symptoms worsen.";
    } else if (input.includes("malaria")) {
        return "For malaria, take prescribed antimalarial medications and rest in a cool, dark room.";
    } else if (input.includes("liver disease")) {
        return "For liver disease, avoid alcohol, eat a balanced diet, and follow prescribed treatments.";
    } else if (input.includes("hepatitis")) {
        return "For hepatitis, get vaccinated, avoid alcohol, and follow doctor’s prescribed medications.";
    } else if (input.includes("kidney stones")) {
        return "For kidney stones, drink plenty of water, avoid oxalate-rich foods, and take pain relievers as prescribed.";
    } else if (input.includes("hypoglycemia")) {
        return "For hypoglycemia, consume quick sugar sources (like glucose tablets) and monitor blood sugar levels.";
    } else if (input.includes("hyperthyroidism")) {
        return "For hyperthyroidism, take thyroid hormone blockers, avoid stress, and follow prescribed treatments.";
    } else if (input.includes("hypothyroidism")) {
        return "For hypothyroidism, take thyroid hormone replacements as prescribed and maintain regular check-ups.";
    } else if (input.includes("menstrual problems")) {
        return "For menstrual problems, maintain a balanced diet, exercise regularly, and track your cycle.";
    } else if (input.includes("skin rash")) {
        return "For skin rashes, avoid scratching, apply calamine lotion, and consult a dermatologist if needed.";
    } else if (input.includes("eczema")) {
        return "For eczema, use moisturizing lotions, avoid allergens, and consider prescribed topical steroids.";
    } else if (input.includes("psoriasis")) {
        return "For psoriasis, use topical creams, moisturizers, and avoid triggers such as stress and smoking.";
    } else if (input.includes("allergic reaction")) {
        return "For allergic reactions, take antihistamines, avoid allergens, and seek medical attention if severe.";
    } else if (input.includes("food poisoning")) {
        return "For food poisoning, stay hydrated, rest, and avoid solid foods until symptoms subside.";
    } else if (input.includes("vertigo")) {
        return "For vertigo, avoid sudden head movements, rest in a dark room, and take prescribed medications.";
    } else if (input.includes("cervical spondylosis")) {
        return "For cervical spondylosis, avoid heavy lifting, practice posture correction, and take pain relief medications.";
    } else if (input.includes("sleep apnea")) {
        return "For sleep apnea, use a CPAP machine, maintain a healthy weight, and avoid alcohol before bed.";
    } else if (input.includes("anemia")) {
        return "For anemia, increase iron intake through food or supplements and get enough rest.";
    } else if (input.includes("osteoporosis")) {
        return "For osteoporosis, consume calcium and vitamin D, exercise, and avoid smoking.";
    } else {
        return "I'm here to help! Could you describe your symptoms further?";
    }
}

// Extended medical chatbot logic with even more health problems
function getBotResponse(input) {
    input = input.toLowerCase();

    // Health Problems and Precautions
    if (input.includes("fever")) {
        return "For fever, please take Paracetamol 500mg every 6 hours and drink plenty of water.";
    } else if (input.includes("cold")) {
        return "For cold, take rest, drink warm fluids, and consider antihistamines.";
    } else if (input.includes("headache")) {
        return "For headache, take Ibuprofen 200mg and avoid stress.";
    } else if (input.includes("stomach pain")) {
        return "For stomach pain, avoid spicy food, stay hydrated, and consider taking antacids.";
    } else if (input.includes("diabetes")) {
        return "For diabetes, maintain a healthy diet, exercise regularly, and monitor blood sugar levels.";
    } else if (input.includes("hypertension")) {
        return "For hypertension, reduce salt intake, exercise, and take prescribed medications.";
    } else if (input.includes("anxiety")) {
        return "For anxiety, practice relaxation techniques, avoid caffeine, and seek counseling if needed.";
    } else if (input.includes("asthma")) {
        return "For asthma, avoid allergens, use an inhaler as prescribed, and monitor symptoms regularly.";
    } else if (input.includes("back pain")) {
        return "For back pain, maintain proper posture, avoid heavy lifting, and apply heat or cold therapy.";
    } else if (input.includes("arthritis")) {
        return "For arthritis, exercise regularly, maintain a healthy weight, and take pain relief medication as prescribed.";
    } else if (input.includes("sore throat")) {
        return "For sore throat, drink warm fluids, gargle with salt water, and use throat lozenges.";
    } else if (input.includes("sinusitis")) {
        return "For sinusitis, stay hydrated, use saline nasal sprays, and take decongestants.";
    } else if (input.includes("gout")) {
        return "For gout, avoid purine-rich foods, take prescribed medications, and stay hydrated.";
    } else if (input.includes("migraine")) {
        return "For migraine, avoid triggers, take pain-relief medications, and rest in a quiet room.";
    } else if (input.includes("epilepsy")) {
        return "For epilepsy, take anticonvulsant medications as prescribed, avoid triggers.";
    } else if (input.includes("insomnia")) {
        return "For insomnia, follow good sleep hygiene, avoid caffeine, and try relaxation techniques.";
    } else if (input.includes("pneumonia")) {
        return "For pneumonia, rest, drink fluids, and follow doctor's instructions for antibiotics.";
    } else if (input.includes("diarrhea")) {
        return "For diarrhea, stay hydrated with oral rehydration salts, avoid fatty foods.";
    } else if (input.includes("appendicitis")) {
        return "If you suspect appendicitis, seek immediate medical attention, and avoid eating or drinking.";
    } else if (input.includes("stroke")) {
        return "For stroke, seek immediate medical attention, take prescribed medications, and participate in rehabilitation.";
    } else if (input.includes("heart attack")) {
        return "For heart attack, seek emergency medical help, follow post-care instructions, and maintain heart-healthy habits.";
    } else if (input.includes("cancer")) {
        return "For cancer, follow prescribed treatments, maintain good nutrition, and seek emotional support.";
    } else if (input.includes("chronic pain")) {
        return "For chronic pain, take pain relief medications as prescribed, practice relaxation techniques.";
    } else if (input.includes("urinary tract infection")) {
        return "For UTI, drink plenty of fluids, take antibiotics as prescribed, and avoid irritants.";
    } else if (input.includes("irritable bowel syndrome")) {
        return "For IBS, avoid trigger foods, eat fiber-rich meals, and manage stress.";
    } else if (input.includes("allergies")) {
        return "For allergies, identify and avoid triggers, use antihistamines, and seek allergy treatments.";
    } else if (input.includes("coughing")) {
        return "For a persistent cough, drink honey lemon tea, stay hydrated, and seek medical advice if symptoms persist.";
    } else if (input.includes("tuberculosis")) {
        return "For tuberculosis, complete the prescribed course of antibiotics and follow doctor’s guidance.";
    } else if (input.includes("chickenpox")) {
        return "For chickenpox, avoid scratching, keep skin clean, and take antihistamines to relieve itching.";
    } else if (input.includes("whooping cough")) {
        return "For whooping cough, take prescribed antibiotics, rest, and avoid close contact with others.";
    } else if (input.includes("dengue")) {
        return "For dengue, stay hydrated, take acetaminophen for pain, and seek immediate medical care if symptoms worsen.";
    } else if (input.includes("malaria")) {
        return "For malaria, take prescribed antimalarial medications and rest in a cool, dark room.";
    } else if (input.includes("liver disease")) {
        return "For liver disease, avoid alcohol, eat a balanced diet, and follow prescribed treatments.";
    } else if (input.includes("hepatitis")) {
        return "For hepatitis, get vaccinated, avoid alcohol, and follow doctor’s prescribed medications.";
    } else if (input.includes("kidney stones")) {
        return "For kidney stones, drink plenty of water, avoid oxalate-rich foods, and take pain relievers as prescribed.";
    } else if (input.includes("hypoglycemia")) {
        return "For hypoglycemia, consume quick sugar sources (like glucose tablets) and monitor blood sugar levels.";
    } else if (input.includes("hyperthyroidism")) {
        return "For hyperthyroidism, take thyroid hormone blockers, avoid stress, and follow prescribed treatments.";
    } else if (input.includes("hypothyroidism")) {
        return "For hypothyroidism, take thyroid hormone replacements as prescribed and maintain regular check-ups.";
    } else if (input.includes("menstrual problems")) {
        return "For menstrual problems, maintain a balanced diet, exercise regularly, and track your cycle.";
    } else if (input.includes("skin rash")) {
        return "For skin rashes, avoid scratching, apply calamine lotion, and consult a dermatologist if needed.";
    } else if (input.includes("eczema")) {
        return "For eczema, use moisturizing lotions, avoid allergens, and consider prescribed topical steroids.";
    } else if (input.includes("psoriasis")) {
        return "For psoriasis, use topical creams, moisturizers, and avoid triggers such as stress and smoking.";
    } else if (input.includes("allergic reaction")) {
        return "For allergic reactions, take antihistamines, avoid allergens, and seek medical attention if severe.";
    } else if (input.includes("food poisoning")) {
        return "For food poisoning, stay hydrated, rest, and avoid solid foods until symptoms subside.";
    } else if (input.includes("vertigo")) {
        return "For vertigo, avoid sudden head movements, rest in a dark room, and take prescribed medications.";
    } else if (input.includes("cervical spondylosis")) {
        return "For cervical spondylosis, avoid heavy lifting, practice posture correction, and take pain relief medications.";
    } else if (input.includes("sleep apnea")) {
        return "For sleep apnea, use a CPAP machine, maintain a healthy weight, and avoid alcohol before bed.";
    } else if (input.includes("anemia")) {
        return "For anemia, increase iron intake through food or supplements and get enough rest.";
    } else if (input.includes("osteoporosis")) {
        return "For osteoporosis, consume calcium and vitamin D, exercise, and avoid smoking.";
    } else if (input.includes("hernia")) {
        return "For hernia, avoid heavy lifting, maintain a healthy weight, and seek surgical treatment if necessary.";
    } else if (input.includes("ringworm")) {
        return "For ringworm, apply antifungal creams, keep the affected area clean, and avoid sharing personal items.";
    } else if (input.includes("lupus")) {
        return "For lupus, take immunosuppressive medications, avoid excessive sun exposure, and follow doctor's guidance.";
    } else if (input.includes("shingles")) {
        return "For shingles, use antiviral medications, and apply soothing lotions to the affected area.";
    } else if (input.includes("bladder infection")) {
        return "For bladder infection, drink plenty of fluids, take antibiotics as prescribed, and avoid irritants.";
    } else if (input.includes("chronic fatigue syndrome")) {
        return "For chronic fatigue syndrome, prioritize sleep, avoid overexertion, and work with a healthcare provider for tailored treatment.";
    } else if (input.includes("gallstones")) {
        return "For gallstones, maintain a healthy diet, avoid fatty foods, and consult a surgeon for possible removal.";
    } else {
        return "I'm here to help! Could you describe your symptoms further?";
    }
}