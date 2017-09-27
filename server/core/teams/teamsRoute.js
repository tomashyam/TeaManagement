/**
 * Created by hack on 27/09/2017.
 */

let teamRepository = require('./teamsRepository')
const express = require('express');
const router = express.Router();


router.get('/getAll' , (req,res)=> {
    // repo.getAll
    try{
        teamRepository.getAllTeams()
            .then((teams)=> {
                res.json(teams);
            })
            .catch((error)=> {
                res.status(500).json({message: "hit an error while get all teams", err: error});
            });
    }
    catch(e)
    {
        e.message;
    }
});

router.post('/add', (req,res)=> {
    try{
        const team = req.body;
        teamRepository.addTeam(team)
            .then((teams)=> {
                res.json(teams);
            })
            .catch((error)=> {
                res.status(500).json({message: "hit an error while get all teams", err: error});
            });
    }
    catch(e)
    {
        e.message;
    }
});

router.post('/delete', (req,res)=> {
    try{
        const teamid = req.body;
        teamRepository.addTeam(teamid)
            .then((teams)=> {
                res.json(true);
            })
            .catch((error)=> {
                res.status(500).json({message: "hit an error while get all teams", err: error});
            });
    }
    catch(e)
    {
        e.message;
    }
});


module.exports = router;