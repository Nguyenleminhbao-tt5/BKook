//index.js file
/////////////////////////////////////////////////////////////////////////////////
// In this section, we set the user authentication, app ID, workflow ID, and  
// image URL. Change these strings to run your own example.
////////////////////////////////////////////////////////////////////////////////
var foodRecognize = function (image_url) {
    var USER_ID = 'wsgavf1yywp3';
    // Your PAT (Personal Access Token) can be found in the portal under Authentification
    var PAT = '494692dadd9943dfa2d57a7a11e96315';
    var APP_ID = 'BKook';
    // Change these to make your own predictions
    var WORKFLOW_ID = 'food-item-recognition-workflow-n7kx7i';
    var IMAGE_URL = image_url;
    /////////////////////////////////////////////////////////////////////////////
    // YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
    /////////////////////////////////////////////////////////////////////////////
    var _a = require("clarifai-nodejs-grpc"), ClarifaiStub = _a.ClarifaiStub, grpc = _a.grpc;
    var stub = ClarifaiStub.grpc();
    // This will be used by every Clarifai endpoint call
    var metadata = new grpc.Metadata();
    metadata.set("authorization", "Key " + PAT);
    stub.PostWorkflowResults({
        user_app_id: {
            "user_id": USER_ID,
            "app_id": APP_ID
        },
        workflow_id: WORKFLOW_ID,
        inputs: [
            { data: { image: { url: IMAGE_URL } } }
        ]
    }, metadata, function (err, response) {
        if (err) {
            throw new Error(err);
        }
        if (response.status.code !== 10000) {
            throw new Error("Post workflow results failed, status: " + response.status.description);
        }
        // We'll get one WorkflowResult for each input we used above. Because of one input, we have here
        // one WorkflowResult.
        var results = response.results[0];
        // Each model we have in the workflow will produce one output.
        for (var _i = 0, _a = results.outputs; _i < _a.length; _i++) {
            var output = _a[_i];
            var model = output.model;
            console.log("Predicted concepts for the model `" + model.id + "`:");
            for (var _b = 0, _c = output.data.concepts; _b < _c.length; _b++) {
                var concept = _c[_b];
                console.log("\t" + concept.name + " " + concept.value);
            }
        }
    });
};

const image = ""

//foodRecognize(image);

import fs from 'fs';
import path from 'path';

function convertBase64ToImage(base64String, outputFilePath) {
    try {
        // Tách phần dữ liệu của hình ảnh từ chuỗi base64
        const base64Data = base64String.split(',')[1];

        // Giải mã chuỗi base64 để lấy dữ liệu của hình ảnh
        const imageBuffer = Buffer.from(base64Data, 'base64');

        // Ghi dữ liệu vào file
        fs.writeFileSync(outputFilePath, imageBuffer);
        console.log(`Đã chuyển đổi và lưu ảnh vào ${outputFilePath}`);
    } catch (error) {
        console.error(`Lỗi: ${error}`);
    }
}

// Sử dụng hàm với chuỗi base64 và đường dẫn file output
const base64StringImage = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAA... (chuỗi base64 ở đây)";
const outputFilePath = path.join(__dirname, 'output_image.png');

convertBase64ToImage(base64StringImage, outputFilePath);
console.log(outputFilePath);
