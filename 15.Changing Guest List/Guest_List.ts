

let Guest_List :string[] = ['Kamran Khan Tessori','Sir Zia','Daniyal Nagori'];

for(let i=0; i<Guest_List.length; i++){

    console.log('Dear Mr. ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!')
    
}

let absent_Guest :string = 'Daniyal Nagori' ;

let new_Guest :string = 'Imran Khan' ;

Guest_List[0] = new_Guest ;

for(let i=0; i<Guest_List.length; i++){

    console.log('Dear Mr. ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!')
    
}
    console.log(`Mr. ${absent_Guest} is not coming to the party.`)
