var messages = {
	"GETALLTASKS": {
        "EN":{
            text: "Here is a list of tasks"
        }
    },
    "GETNEXTTASK": {
        "EN":{text: "Here is your next task"}
    },
    "STARTNEWWORKFLOW":{
        "EN":{
            text:"OK I've started a new workflow."
        }
    },
    "GETALLWORKFLOWS":{
        "EN":{
            text:`Here is a list of workflows: 
            {{#workflows}}
            {{process.name}}\n
            {{/workflows}}
            `
        }
    },
    "CHANNEL_JOIN":{
        "EN":{
            text:"Hey - it looks like you need me to help you onboard a new employee. Are you ready to get started?",
            "as_user":true,
            "attachments": JSON.stringify( [
                {
                    "text": "Do you want to start now?",
                    "fallback": "Start new onboarding",
                    "callback_id": "start_workflow",
                    "color": "#3AA3E3",
                    "attachment_type": "default",
                    "actions": [
                        {
                            "name": "selection",
                            "text": "Let's Go!",
                            "type": "button",
                            "value": "start"
                        },
                        {
                            "name": "selection",
                            "text": "Later Plz",
                            "type": "button",
                            "value": "later"
                        }]
                    }
                ]
            )
        }
    },
	"NOTFOUND": {
        "EN":
        {
            "text": "I can't find that command",
            "as_user":true,
            "attachments": JSON.stringify( [
                {
                    "text": "What would you like to do?",
                    "fallback": "Help not supported",
                    "callback_id": "nocommand_nextstep",
                    "color": "#3AA3E3",
                    "attachment_type": "default",
                    "actions": [
                        {
                            "name": "selection",
                            "text": "Try Another Command",
                            "type": "button",
                            "value": "tryagain"
                        },
                        {
                            "name": "selection",
                            "text": "See All Options",
                            "type": "button",
                            "value": "seeall"
                        },
                        {
                            "name": "game",
                            "text": "Ask for help",
                            "style": "danger",
                            "type": "button",
                            "value": "help",
                            "confirm": {
                                "title": "Are you sure?",
                                "text": "We'll message your manager and ask for help",
                                "ok_text": "Yes",
                                "dismiss_text": "No"
                            }
                        }
                    ]
                    
                }
            ])
        }
    }
}

module.exports = messages;

