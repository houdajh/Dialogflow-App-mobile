import React, {Component} from 'react';
import {StyleSheet, View, Text, SafeAreaView, ScrollView} from 'react-native';
import {Card, Button} from 'react-native-elements';
import {GiftedChat, Bubble} from 'react-native-gifted-chat';
import {Dialogflow_V2} from 'react-native-dialogflow';


import {dialogflowConfig} from './env';

const botAvatar = require('./assets/images/chatbot.png');
const BOT = {
  _id: 2,
  name: 'Mr.Bot',
  avatar: botAvatar,
};

class FriendsScreen extends React.Component {state = {
  messages: [],
  id: 1,
  name: '',
};

componentDidMount() {
  Dialogflow_V2.setConfiguration(
    dialogflowConfig.client_email,
    dialogflowConfig.private_key,
    Dialogflow_V2.LANG_ENGLISH_US,
    dialogflowConfig.project_id,
  );

  //const {name, id} = this.props.route.params;

  
}

handleGoogleResponse(result) {
  let text = result.queryResult.fulfillmentMessages[0].text.text[0];
  
  let  lowerCaseMessage = result.queryResult.queryText.toLowerCase();
  console.log("***********");
  console.log(lowerCaseMessage)

  

  this.sendBotResponse(text, lowerCaseMessage);
}

sendBotResponse(text ,lowerCaseMessage) {
  let msg;
  //console.log(lowerCaseMessage.includes('travel'));
  if (lowerCaseMessage.includes('allergy') || lowerCaseMessage.includes('allergie') || lowerCaseMessage.includes('allergies') || lowerCaseMessage.includes('help') || lowerCaseMessage.includes('Help') || lowerCaseMessage.includes('service') || lowerCaseMessage.includes('services')) {
    msg = {
      text: ` food allergy is a condition in which certain foods trigger an abnormal immune response.\n
      It’s caused by your immune system wrongly recognizing some of the proteins in a food as harmful.\n Your body then launches a range of protective measures, including releasing chemicals like histamine, which causes inflammation.\n
      
      \n For people who have a food allergy, even exposure to very small amounts of the problem food can cause an allergic reaction.`,
      createdAt: new Date().getTime(),
      user: BOT,
      isOptions: true,
      data: [
        {
          title: 'What is a food Allergies?',
        },
        {
          title: 'Food Allergies symptoms',
        },
        {
          title: 'Types of food Allergies',
        },
        {
          title: 'Most common food Allergies',
        },
      ],
      //lowerCaseMessage = data.title

      
      
    };
    //console.log(msg.data[0].title)
    
  }else if (lowerCaseMessage == 'What is a food Allergies?') {
    msg = {
      text: ` food allergy is a condition in which certain foods trigger an abnormal immune response.\n
      It’s caused by your immune system wrongly recognizing some of the proteins in a food as harmful.\n Your body then launches a range of protective measures, including releasing chemicals like histamine, which causes inflammation.\n
      
      \n For people who have a food allergy, even exposure to very small amounts of the problem food can cause an allergic reaction.`,
     
      createdAt: new Date().getTime(),
      user: BOT,

      
    };
  }
    else if (lowerCaseMessage == 'Food Allergies symptoms') {
    msg = {
      text: `\nswelling of the tongue, mouth, or face\n
      difficulty breathing\n
      low blood pressure\n
      vomiting\n
      diarrhea\n
      hives\n
      itchy rash`,
      createdAt: new Date().getTime(),
      user: BOT,

      
    };

    
  }else if (lowerCaseMessage.includes('Types of food Allergies') ) {
    msg = {
      text: `\nImmunoglobulin E (IgE) mediated: In this type of food allergy, your body’s immune system makes IgE antibodies that react with certain food. Antibodies are a type of blood protein used by your immune system to recognize and fight infection. An IgE-mediated allergic reaction usually occurs within several hours of eating the food allergen and can include mild to severe symptoms, including anaphylaxis\n
      Non-IgE mediated: In a non-IgE food allergy, your immune system does not make IgE antibodies, but other parts of the immune system are engaged in mounting a response against the perceived threat. A non-IgE mediated allergic reaction often involves skin or digestive symptoms, or a combination of those symptoms, including vomiting and diarrhea, and can occur up to 3 days after eating the food allergen `,
      createdAt: new Date().getTime(),
      user: BOT,
      
    };

    
  }else if (lowerCaseMessage.includes('Cow’s milk') ) {
    msg = {
      text: `A cow’s milk allergy mostly affects children under 3 years old. 
      A cow’s milk allergy diagnosis means that all milk and milk products must be avoided.
      This includes any foods or drinks that contain:

      milk
      milk powder
      cheese
      butter
      margarine
      yogurt
      cream
      ice cream`,
      createdAt: new Date().getTime(),
      user: BOT,
      
    };

    
  }else if (lowerCaseMessage.includes('Eggs') ) {
    msg = {
      text: `Symptoms include: digestive distress, such as a stomach ache skin reactions, such as hives or a rash respiratory problems anaphylaxis (which is rare) .
      The most common type of egg allergy is an egg white allergy. 
      The treatment is an egg-free diet. However, some people may be able to reintroduce some foods containing cooked eggs into their diet.`,
      createdAt: new Date().getTime(),
      user: BOT,
      
    };

    
  }else if (lowerCaseMessage.includes('Tree nuts') ) {
    msg = {
      text: `A tree nut allergy is one of the most common food allergies. 
      It’s frequently associated with severe allergic reactions, and the treatment is usually a lifelong avoidance of all tree nuts and tree nut products.Some examples of tree nuts include: Brazil nuts almonds cashews macadamia nuts pistachios pine nuts walnuts`,
      createdAt: new Date().getTime(),
      user: BOT,
      
    };

    
  }else if (lowerCaseMessage.includes('Peanuts') ) {
    msg = {
      text: `A peanut allergy is a serious condition that can cause a severe allergic reaction. 
      Treatment is lifelong avoidance of peanuts and peanut-containing products.A peanut allergy is diagnosed using a combination of:
       health history skin-prick testing blood tests food challenges`,
      createdAt: new Date().getTime(),
      user: BOT,
      
    };

    
  }
  else if (lowerCaseMessage.includes('Shellfish') ) {
    msg = {
      text: `The most common trigger of a shellfish allergy is a protein called tropomyosin. The only treatment for a shellfish allergy is removing all shellfish from your diet.
      Examples of shellfish include: shrimp ,prawns ,crayfish,lobster,squid,scallops`,
      createdAt: new Date().getTime(),
      user: BOT,
      
    };

    
  }
  else if (lowerCaseMessage.includes('Wheat') ) {
    msg = {
      text: `A wheat allergy can be caused by a sensitivity to any of the hundreds of proteins in wheat. The only treatment is a wheat-free diet, but many people outgrow it before they reach school age.`,

      createdAt: new Date().getTime(),
      user: BOT,
      
    };

    
  }
  else if (lowerCaseMessage.includes('Soy') ) {
    msg = {
      text: `A soy allergy is triggered by the proteins in soybeans and soybean products. If you have a soy allergy, the only treatment is the removal of soy from your diet.`,
      createdAt: new Date().getTime(),
      user: BOT,
      
    };

    
  }
  else if (lowerCaseMessage.includes('Fish') ) {
    msg = {
      text: `Fish allergies are common, affecting up to around 7% of adults.

      Similar to other allergies, people often develop fish allergies during childhood. But it’s not uncommon for a fish allergy to surface later in life.Fish allergies are common, but they may be confused with an adverse reaction to contaminated fish.`,
      createdAt: new Date().getTime(),
      user: BOT,
      
    };

    
  }
   else if (lowerCaseMessage.includes('Most common food Allergies')) {
    msg = {
      text,
      createdAt: new Date().getTime(),
      user: BOT,
      isOptions: true,
      data: [
        {
          title: 'Cow’s milk',
          image:
            'https://img.etimg.com/thumb/msid-64411656,width-640,resizemode-4,imgsize-226493/cow-milk.jpg',
          rep : 'hi',
        },
        {
          title: 'Eggs',
          image:
            'https://cdn.britannica.com/94/151894-050-F72A5317/Brown-eggs.jpg',
            rep : 'hi',
        },
        {
          title: 'Tree nuts',
          image:
            'https://www.verywellhealth.com/thmb/45PJfywZmkzbmoi3CpiA8aPlRS4=/2560x1920/smart/filters:no_upscale()/the-tree-nut-allergy-diet-guide-1324280-selects-25c863756406496d8796feacd58461c7.jpg',
          rep : 'hi',
        },
        {
          title: 'Peanuts',
          image:
            'https://www.eatthis.com/wp-content/uploads/sites/4/2021/10/Untitled-design-48-5.png?quality=82&strip=1',
          rep : 'hi',
        },
        {
          title: 'Shellfish',
          image:
            'https://media.istockphoto.com/photos/raw-seafood-cocktail-close-up-picture-id586165510?k=20&m=586165510&s=612x612&w=0&h=k4Z5Vvzi9XxOR8xbxhL8W-9pyQ63c_UTmAH0gyvbcHY=',
          rep : 'hi',
        },
        {
          title: 'Wheat',
          image:
            'https://agro-market24.eu/uploads/photos/70099/sprzedam_cereals%20-cereals-wheat-_agromarket_mi%C4%99dzynarodowa%20gie%C5%82da%20rolna-642822-70099.jpg',
          rep : 'hi',
        },
        {
          title: 'Soy',
          image:
            'https://www.ucsfhealth.org/-/media/project/ucsf/ucsf-health/education/hero/20-ways-to-increase-soy-in-your-diet-2x.jpg',
          rep : 'hi',
        },
        {
          title: 'Fish',
          image:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzPQbzlugyWQa_1qvvZd-CdiwKd_BrabcLkg&usqp=CAU',
          rep : 'hi',
        },
      ],
    };
    
    
  } else {
    
    msg = {
      text,
      createdAt: new Date().getTime(),
      user: BOT,
    };
  }

  //const {id} = this.props.route.params;

  

  msg._id = this.state.messages.length + 1;

  this.setState((previouseState) => ({
    messages: GiftedChat.append(previouseState.messages, [msg]),
  }));
}

onSend(messages = []) {
  this.setState((previouseState) => ({
    messages: GiftedChat.append(previouseState.messages, messages),
  }));

  let text = messages[0].text;

 // const {id, name} = this.props.route.params;

  

  Dialogflow_V2.requestQuery(
    text,
    (result) => this.handleGoogleResponse(result),
    (error) => console.log(error),
  );
}

onQuickReply(quickReply) {
  this.setState((previouseState) => ({
    messages: GiftedChat.append(previouseState.messages, quickReply),
  }));

  let message = quickReply[0].value;

  Dialogflow_V2.requestQuery(
    message,
    (result) => this.handleGoogleResponse(result),
    (error) => console.log(error),
  );
}

renderBubble = (props) => {
  if (props.currentMessage.isOptions) {
    return (
      <ScrollView style={{backgroundColor: 'white'}} horizontal={true}>
        {props.currentMessage.data.map((item) => (
          <Card
            containerStyle={{
              padding: 0,
              borderRadius: 15,
              paddingBottom: 7,
              overflow: 'hidden',
            }}
            key={item.title}>
            <Card.Image
              style={{width: 220, height: 110}}
              resizeMode="cover"
              source={item.image ? {uri: item.image}: require('./assets/images/Allergies.jpg')}></Card.Image>
            <Card.Divider />
            <Card.Title>{item.title}</Card.Title>
            <Button
              title="Choose"
              style={{height: 35}}
              onPress={() => this.sendBotResponse(item.title ,item.title )}
            />
          </Card>
        ))}
      </ScrollView>
    );
  }

  return (
    <Bubble
      {...props}
      textStyle={{right: {color: 'white'}}}
      wrapperStyle={{
        left: {backgroundColor: 'yellow'},
        right: {backgroundColor: 'pink'},
      }}
    />
  );
};

render() {
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <GiftedChat
        messages={this.state.messages}
        onSend={(message) => this.onSend(message)}
        onQuickReply={(quickReply) => this.onQuickReply(quickReply)}
        renderBubble={this.renderBubble}
        user={{_id: 1}}
      />
    </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
// ...
export default FriendsScreen;