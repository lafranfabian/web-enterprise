import './Button.css';

type ButtonProps = {
    flag: string;
}

export default function Button({flag}: ButtonProps) {
    function handleClick(){
        alert("Button Clicked")
    }

    function handleClickTrue(){
        alert('Tombol Clicked with TRUE Value!')
    }

    return <button className='Tombol'
        onClick={flag == 'Hello'? handleClickTrue : handleClick }>
            Klik saya
     </button>
}