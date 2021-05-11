const MongoClient = require("mongodb").MongoClient;
// connection with Mongodb Atlas...
// const URL = "mongodb+srv://userdemo:susmita123@cluster0.7bnhj.mongodb.net/school?retryWrites=true&w=majority";
// connection with Mongodb community...
const URL = " mongodb://127.0.0.1:27017/";
const config = {useUnifiedTopology: true};
MongoClient.connect(URL,config,function (error,MyMongoClient){
        if (error){
         console.log("connection fail");
        }
        else{
            console.log("connection success");
           // InsertData(MyMongoClient);
            //FindOneWithoutCondition(MyMongoClient);
           // FindOneWithCondition(MyMongoClient);
            //FindAllData(MyMongoClient);
            //FindAllDataByProjection(MyMongoClient);
           // FindAllDataByQuery(MyMongoClient);
          //  FindAllDataByLimit(MyMongoClient);
           // FindAllDataBySort(MyMongoClient);
           // UpdateMyData(MyMongoClient);
           // CreateMyCollection(MyMongoClient);
            DeleteMyCollection(MyMongoClient);
        }
});

function InsertData(MyMongoClient) {
    let MyDatabase =MyMongoClient.db("school");
    let MyCollection=MyDatabase.collection("student");
    let MyData = {
            name:"Pijush Dhua",
            roll: "04",
            class:"2nd yr",
            city:"Bankura"
        };

    MyCollection.insertOne(MyData,function (error) {
        if (error){
            console.log("Data insert fail");
        }
        else {
            console.log("Data insert Success");
        }


    });
}

function FindOneWithoutCondition(MyMongoClient) {
    let MyDatabase =MyMongoClient.db("school");
    let MyCollection=MyDatabase.collection("student");
    let FindObj= { }

    MyCollection.findOne(FindObj,function (error,result) {
        console.log(result);
    });
}

function FindOneWithCondition(MyMongoClient) {
    let MyDatabase =MyMongoClient.db("school");
    let MyCollection=MyDatabase.collection("student");
    let FindObj= { roll:"02" }
    MyCollection.findOne(FindObj,function (error,result) {
        console.log(result);
    });
}
function FindAllData(MyMongoClient) {
    let MyDatabase =MyMongoClient.db("school");
    let MyCollection=MyDatabase.collection("student");
    MyCollection.find().toArray(function (error,result){
        console.log(result);
    });
}

function FindAllDataByProjection(MyMongoClient) {
    let MyDatabase =MyMongoClient.db("school");
    let MyCollection=MyDatabase.collection("student");
    let ItemObj= {}
    let  ItemProjection={projection:{name:""}}

    MyCollection.find(ItemObj,ItemProjection).toArray(function (error,result){
        console.log(result);
    });
}

function FindAllDataByQuery(MyMongoClient) {
    let MyDatabase =MyMongoClient.db("school");
    let MyCollection=MyDatabase.collection("student");
    let query= {roll:"01", city:"Bankura"};

    MyCollection.find(query).toArray(function (error,result){
        console.log(result);
    });
}

function FindAllDataByLimit(MyMongoClient) {
    let MyDatabase =MyMongoClient.db("school");
    let MyCollection=MyDatabase.collection("student");

    MyCollection.find().limit(2).toArray(function (error,result){
        console.log(result);
    });
}

function FindAllDataBySort(MyMongoClient) {
    let MyDatabase =MyMongoClient.db("school");
    let MyCollection=MyDatabase.collection("student");
    //let SortPattern = {roll:1} // ASC order
    let SortPattern = {roll:-1} // DESC order
    MyCollection.find().sort(SortPattern).toArray(function (error,result){
        console.log(result);
    });
}

function UpdateMyData(MyMongoClient) {
    let MyDatabase =MyMongoClient.db("school");
    let MyCollection=MyDatabase.collection("student");

    let MyQuery ={roll:"2"}
    let MyNewValues ={ $set: {city:"Dhaka"}}
    
    MyCollection.updateOne(MyQuery,MyNewValues,function (error,result) {
        console.log(result);
    });
}

function CreateMyCollection(MyMongoClient) {
    let MyDatabase =MyMongoClient.db("school");

    MyDatabase.createCollection("teachers",function (error,result) {
        console.log(result);
    });
}

function DeleteMyCollection(MyMongoClient) {
    let MyDatabase =MyMongoClient.db("school");
    MyDatabase.dropCollection("teachers",function(error,result){
        console.log(result);
    });
}
