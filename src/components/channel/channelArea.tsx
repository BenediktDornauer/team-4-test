import { Component } from "react";

//needs to be adapted depending on what to send
interface User {
  username: String,
}

interface Message {
    messageContent: String,
    userWhoWroteMessage: User,
}

//messages saved in a list
interface MessageListProps {
}

interface MessageListState {
    messages: Array<Message>,
    isLoading: boolean,
}

class channelArea extends Component<MessageListProps, MessageListState> {
constructor(props: MessageListProps) {
    super(props);
    this.state = {
        messages: [],
        isLoading: false,
    };

    {/*async componentDidMount() {
        this.setState({isLoading: true});

        const response = await fetch('http://localhost:8080/channelArea'); //not sure what to fetch
        const data = await response.json;
        this.setState({messages: data, isLoading: false});

    } */}

}

}

export default channelArea;
