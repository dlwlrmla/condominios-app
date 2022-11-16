import {pool} from "../Components/db.js"


export const getUsers = async (req, res) => {
    try{
        const promisePool = pool.promise()
        const [result] = await promisePool.query(
            "select  * from users "
        )
        res.json(result)
    }catch (error){
        return res.status(500)
        .json({message : error.message})
    }
}

export const getUser = async (req, res) => {
    try {
        const promisePool = pool.promise()
        const [result] = await promisePool.query(
            "select * from users where id  = ? ", [
                req.params.id
            ])
        if (result.length === 0) {
            res.status(404).json({ message: error.message})
        }
        res.send(result)
    } catch (error) {
        return res.status(500).json ({ message: error.message})
    }
}

export const deleteUser = async (req, res ) => {

    try {

    const promisePool = pool.promise()
    const [result] = await promisePool.query(
        "delete from users where id = ? ",
        req.params.id
    )
    if(result.affectedRows === 0 ){
        res.status(404).json ({message: "id not found"})
    }else {
        res.status(200).json({ message : "delete completed "})
    }
        
    } catch (error) {
        return res.status(500).json({error : error.message})
        
    }
}
///q wea paso por la xuxa
export const editUser = async (req, res) => {
    try {
        const promisePool = pool.promise()
        const result = await promisePool.query( )
    } catch (error) {
        
    }
}
