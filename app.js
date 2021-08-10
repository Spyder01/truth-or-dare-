const colors = [
    '#4682b4',
    '#73A855',
    '#74C8A0',
    '#E15F57',
    '#00BF9A',
    '#273f87',
    '#366A4E',
    '#2C3E4F',
    '#FF903D',
    '#32CAD0',
    '#F0B049',
    '#F04F49',
    '#35975A',
    '#41E69A',
    '#FF3D9A',
    '#FF3D34',
    '#01FF70',
    '#FF4136',
    '#B10DC9',
    '#bb5d3b'
]

const Tasks = [{
    Task: "How would be your reaction if your partner has sex with another person?",
    category: "truth"
},
{
    Task: "Reveal your text chat with one of the persons' you are attracted too.",
    category: "dare"
},
{
    Task: "What is the name of the latest person in our circle whom you are attracted too?",
    category: "truth"
},
{
    Task: "Call a random person from your contact and ask them if they are interested in a date?",
    category: "dare"
},
{
    Task: "Reveal the weirdest sex fantasy you had?",
    category: "truth"   
},
{
    Task: "Go to the nearest stranger and pretend to talk something very hideous in the call.",
    category: "dare"
},
{
    Task: "Were you ever attracted to your friend's partner? If yes, who and on what circumstances?",
    category: "truth"   
},
{
    Task: "Call a girl/guy and start referring to them by some other name",
    category: "dare"
},
{
    Task: "What is the most embarrassing thing you have done in the public.",
    category: "truth"
},
{
    Task: "What is the most savage/badass thing you have done.",
    category: "truth"
},
{
    Task: "What is the strangest dream you ever had?",
    category: "truth"
},
{
    Task: "Ever had a crush on a much older person?",
    category: "truth"
},
{
    Task: "The movie you have watched but too reluctant to accept.",
    category: "truth"
},
{
    Task: "Describe your dream partner?",
    category: "truth"
},
{
    Task: "Do you have a type? If yes, what are they?",
    category: "truth"
},
{
    Task: "Most attractive part of human body?",
    category: "truth"
},
{
    Task: "When did you last got a scolding from yur mom and for what?",
    category: "truth"
},
{
    Task: "A secret that your parents can never know about?",
    category: "truth"
},
{
    Task: "Things you hate the most in people?",
    category: "truth"
},
{
    Task: "Would you like to have kids? If yes, then why and how much? If not, then why?",
    category: "truth"
},
{
    Task: "Ever crushed on your cousin?",
    category: "truth"
},
{
    Task: "Ever kissed in the public?",
    category: "truth"
},
{
    Task: "Your dream wedding?",
    category: "truth"
},
{
    Task: "What is the first thing you do when invisible?",
    category: "truth"
},
{
    Task: "One of the starngest confrontation you hace ever experienced?",
    category: "truth"
},
{
    Task: "Name your secret crush",
    category: "truth"
},
{
    Task: "When was the last time you wet the bed?",
    category: "truth"
},
{
    Task: "What is the longest you have ever slept?",
    category: "truth"
},
{
    Task: "Your most creative murder fantasy?",
    category: "truth"
},
{
    Task: "The longest you have been without sleep",
    category: "truth"
},
{
    Task: "That one non-relative you would never see being hurt.",
    category: "truth"
}
]



const app = Vue.createApp({
    data() {
        return {
            Tasks: Tasks,
            Task: "",
            By: "",
            Color: ""
        }
    },
    methods: {
        Changer() {
            this.Color = colors[Math.floor(Math.random() * colors.length)]
            var Obj = this.Tasks[Math.floor(Math.random() * this.Tasks.length)]
            this.Tasks = this.Tasks.filter(Task=>{
                if(Task!=Obj) {
                    return Task
                }
            })
            var { Task, category } = Obj
            this.Task = Task
            this.category = category
            if(this.Tasks.length==0) {
                this.Tasks = Tasks;
            }
            document.body.style.backgroundColor = this.Color;

        }
    },
    created () {
        this.Color = colors[Math.floor(Math.random() * colors.length)]
        var Obj = Tasks[Math.floor(Math.random() * Tasks.length)]
        var { Task, category } = Obj
        this.Task = Task
        this.category = category
        document.body.style.backgroundColor = this.Color;
    }

})

app.mount("#app")