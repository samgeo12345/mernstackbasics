export function getNotes(req,res){
    res.status(200).send("you got 10 notes!");
};
export function postNotes(req,res){
    res.status(201).json({message:"post creates succeasfully"});
};
export function putNotes(req,res){
    res.status(200).json({message:"post updated successfully"});
};
export function deleteNotes(req,res){
    res.status(200).json({message:"post deleted!"});
};