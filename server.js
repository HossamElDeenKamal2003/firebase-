const express = require('express');
const { col, col2, col3 } = require('./config'); // Import Firestore collection
const app = express();
app.use(express.json());


app.get('/azkar', async(req, res)=>{
    try {
        const snapshot = await col.get();
        const index = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        res.status(200).json({ index });
    }catch (error){
        console.log(error);
        return res.status(500).send("Error occurred");
    }
})

app.get('/questions', async(req,res)=>{
    try {
        const snapshot = await col2.get();
        const index = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        res.status(200).json({ index });
    }catch (error){
        console.log(error);
        return res.status(500).send("Error occurred");
    }
})

app.get('/story', async(req,res)=>{
    try {
        const snapshot = await col3.get();
        const index = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        res.status(200).json({ index });
    }catch (error){
        console.log(error);
        return res.status(500).send("Error occurred");
    }
})

//
// app.post('/story', async (req, res) => {
//     try {
//         const { title, text } = req.body;
//
//         // Validation
//         if (!title || !text) {
//             return res.status(400).json({ error: "Question and answer objects are required" });
//         }
//
//         // Create document
//         const docRef = await col2.add({
//             title: title,
//             text: text,
//         });
//
//         res.status(201).json({
//             success: true,
//             id: docRef.id
//         });
//
//     } catch (error) {
//         console.error("Error adding question:", error);
//         res.status(500).json({
//             error: "Failed to add question",
//             details: error.message
//         });
//     }
// });
// app.get('/questions', async (req, res) => {
//     try {
//         const snapshot = await col2.get();
//         const index = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
//         res.status(200).json({ index });
//     } catch (error) {
//         res.status(500).json({ error: "Failed to fetch Azkar" });
//     }
// });
//
//
// // GET all Azkar
// app.get('/index', async (req, res) => {
//     try {
//         const snapshot = await col.get();
//         const index = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
//         res.status(200).json({ index });
//     } catch (error) {
//         res.status(500).json({ error: "Failed to fetch Azkar" });
//     }
// });
//
// app.post('/add-azkar', async (req, res) => {
//     try {
//         const { type, azkar } = req.body; // Destructure the request body
//
//         // Validate input
//         if (!type || !azkar || !Array.isArray(azkar)) {
//             return res.status(400).json({ error: "Invalid request format" });
//         }
//
//         // 1. Check if a document with this type exists
//         const snapshot = await col.where('type', '==', type).limit(1).get();
//
//         if (!snapshot.empty) {
//             // 2A. Merge new Azkar into existing document
//             const doc = snapshot.docs[0];
//             await doc.ref.update({
//                 azkar: admin.firestore.FieldValue.arrayUnion(...azkar) // Spread the array
//             });
//         } else {
//             // 2B. Create new document
//             await col.add({
//                 type,
//                 azkar,
//             });
//         }
//
//         res.status(201).json({ success: true });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ error: "Failed to add Azkar" });
//     }
// });

app.listen(3000, () => console.log('Server running on port 3000'));