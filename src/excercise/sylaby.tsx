import React, { useState, useEffect } from 'react';
import Btn from '../Btn';

type Props = {
    sylaby: Array<string>,
    litery: boolean,
    onEnd: () => void,
    fontSize: string,
    firstCol: boolean,
    lastCol: boolean,
};

enum Rezultat {
    OK,
    FAIL,
    NONE,
}

type Zadanie = {
    sylaba: string,
    wynik: Rezultat,
}

const Sylaby = (props: Props) => {
    const [all, setAll] = useState<Array<string>>([]);
    
    const [zadania, setZadania] = useState<Array<Zadanie>>();
    const [zad, setZad] = useState<Zadanie>();

    const [ss, setSS] = useState<boolean>(false);

    useEffect(() =>{
        setAll(props.sylaby);
        const z: Array<Zadanie> = [];
        props.sylaby.forEach(s => {
            z.push({sylaba: s, wynik: Rezultat.NONE })
        });
        setZadania(z);
    }, [props.sylaby]);

    useEffect(() => {
        const left = zadania?.filter(x=>x.wynik === Rezultat.NONE) || [];
        const z = left[Math.floor(Math.random() * left.length)]; 
        setZad(z);
    }, [zadania]);

    const ZadOk = () => {
        const zz: Array<Zadanie> = Object.assign([], zadania);
        const z = zz?.filter(x => x.sylaba === zad?.sylaba)[0] || null;
        if(z){
            z.wynik = Rezultat.OK;
            setZadania(zz);
        }
    };

    const ZadFail = () => {
        const zz: Array<Zadanie> = Object.assign([], zadania);
        const z = zz?.filter(x => x.sylaba === zad?.sylaba)[0] || null;
        if(z){
            z.wynik = Rezultat.FAIL;
            setZadania(zz);
        }
    };

    const DoPoprawy = () => zadania?.filter(x => x.wynik === Rezultat.FAIL).map(a => a.sylaba).join(',');
    const Poprawnie = () => zadania?.filter(x => x.wynik === Rezultat.OK).map(a => a.sylaba).join(',');

    useEffect(() =>{
        if(zadania?.filter(x => x.wynik === Rezultat.NONE).length === 0){
            setSS(true);
        }else{
            setSS(false);
        }
    }, [zadania]);

    const getSylaba = () => {
        if(zad){
            let x = props.litery ? zad.sylaba.toUpperCase() : zad.sylaba.toLowerCase();
            if(props.firstCol && x.length > 1){
                const y = <span><span style={{color:'red'}}>{x.substr(0,1)}</span>{x.substr(1,x.length-1)}</span>
                return y;
            }
            if(props.lastCol && x.length > 1){
                const y = <span>{x.substr(0,x.length-1)}<span style={{color:'red'}}>{x.substr(x.length-1,1)}</span></span>
                return y;
            }

            return x;
        }
        return '';
    }

    return <div>
        <div className='small'>Wybrane: {props.sylaby.join(',')}</div>
        {zad && <div><div className='main' style={{fontSize: `${props.fontSize}px`}}>
            {getSylaba()}
            </div>
        <br/><br/>
        <Btn
            text="Źle" 
            onClick={ZadFail} 
            style={{
                padding: '10px 30px 10px 30px',
                backgroundColor: 'red',
                color: 'white',
                fontSize: '20px',
                border: "1px solid #ccc",
                borderRadius: '20px'
            }}
        />
        <Btn 
            text="OK" 
            onClick={ZadOk}
            style={{
                padding: '10px 30px 10px 30px',
                backgroundColor: 'green',
                color: 'white',
                fontSize: '20px',
                border: "1px solid #ccc",
                borderRadius: '20px'
            }}
            /></div>}
        {ss && <div>
         <hr />
         <div style={{fontSize: '26px'}}>
        Do poprawy: <span style={{color: 'red'}}>{DoPoprawy()}</span></div> <br/>
        <hr/>
        OK: {Poprawnie()}
        <Btn text='Powrót' onClick={props.onEnd} />
        </div>}
    </div>
};

export default Sylaby;
