import React from "react";
class Pract extends React.Component {
    constructor(props) {
        super(props);
        this.dateRef = null;
        this.timeRef = null;

        // Start interval
        setInterval(() => {
            const now = new Date();
            const formattedDate = `${now.getMonth() + 1}/${now.getDate()}`;
            const formattedTime = now.toLocaleTimeString();

            if (this.dateRef) this.dateRef.textContext
        })
    }
}