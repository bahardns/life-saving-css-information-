import { isVisible } from '@testing-library/user-event/dist/utils';
import React, { Component } from 'react';
import  styles  from "./styles.module.scss";

class ListTypeTable extends Component {
    constructor() {
        super();
   this.state={
        users:[
            {usersId:1, usersName:"bahar", usersSurname:"danis", usersEmail:"bahardanis"}  ,
            {usersId:1, usersName:"buse", usersSurname:"karakas", usersEmail:"busekarakas"}  
      ]
    }
    }
    render(){
       return (
            <div>
                <h3>table with ul li elements</h3>
                <div className={styles.container}>
                <ul className={styles.ul}>
                    <li className={styles.tableHead}>
                        <div className={styles.line}>First Name</div>
                        <div className={styles.line}>Last Name</div>
                        <div className={styles.line}>E-mail</div>
                    </li>
                    <li className={styles.TableLine}> 
                         <div className={styles.line}>bahar</div>
                         <div className={styles.line}>daniş</div>
                        <div className={styles.line}>birisi@gmail.com</div>
                    </li>
                    <li className={styles.TableLine}> 
                         <div className={styles.line}>buse</div>
                         <div className={styles.line}>karakaş</div>
                        <div className={styles.line}>birisi@gmail.com</div>
                    </li>
                    <li className={styles.TableLine}> 
                         <div className={styles.line}>John</div>
                         <div className={styles.line}>Doe</div>
                        <div className={styles.line}>birisi@gmail.com</div>
                    </li>
                    <li className={styles.TableLine}> 
                         <div className={styles.line}>ceren</div>
                         <div className={styles.line}>danis</div>
                        <div className={styles.line}>birisi@gmail.com</div>
                    </li>
                </ul>
                </div>
            </div>
        );
       }
    }
export default ListTypeTable;