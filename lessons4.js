function getObjFromNum( num ) {
    var obj = {};
    if ( num < 1 || num > 999 || isNaN( num )) {
        console.log( 'Ошибка. Введите число от 1 до 999' );
        return obj;
    }
    else {
        obj[ 'едининцы' ] = num % 10;
        obj[ 'десятки' ] = ( num - obj[ 'едининцы' ]) % 100 / 10;
        obj[ 'сотни' ] = ( num - obj[ 'едининцы' ] - obj[ 'десятки' ] * 10 ) % 1000 / 100;
        return obj;
    }
}
console.log( getObjFromNum( 42 ));

var event, ok,log=[];
function startGame() {
	log [0] = works.a00 + works.al + works.a2 + "-1 выход из игры";
	do {
		ok = false ;
		event = +prompt(works.a00 + works.a1 + works.a2 + "-1 выход из игры");
		if (event == -1) {
			break;
		}
		else {
			ok = isAnswer(works.a0, event);
		}
	} while(!ok);
	switch (event) {
		case 1: //первое действие 
		log[1]= works.b00 + works.b1 + works.b2 + "-1 выход из игры";
		do {
		ok = false ;
		event = +prompt(works.b00 + works.b1 + works.b2 + "-1 выход из игры");
		if (event == -1) {
			break;
		}
		else {
			ok = isAnswer(works.b0, event);
		}
		} while(!ok);
		switch (event) {
		case 1: //второе действие
		log[2]= works.d00 + works.d1 + works.d2 + "-1 выход из игры";
		do {
		ok = false ;
		event = +prompt(works.d00 + works.d1 + works.d2 + "-1 выход из игры");
		if (event == -1) {
			break;
		}
		else {
			ok = isAnswer(works.d0, event);
		}
		} while(!ok);
		break;
		case 2://второе действие
		log[2]= works.d00 + works.d1 + works.d2 + "-1 выход из игры";
		do {
		ok = false ;
		event = +prompt(works.d00 + works.d1 + works.d2 + "-1 выход из игры");
		if (event == -1) {
			break;
		}
		else {
			ok = isAnswer(works.d0, event);
		}
		} while(!ok);
		break;
	    case -1://второе действие
		break;
	    default:
		alert("Ошибка");
        }
		case 2://первое действие
		log[1]= works.с00 + works.с1 + works.с2 + "-1 выход из игры";
		do {
		ok = false ;
		event = +prompt(works.с00 + works.с1 + works.с2 + "-1 выход из игры");
		if (event == -1) {
			break;
		}
		else {
			ok = isAnswer(works.с0, event);
		}
		} while(!ok);
		switch (event) {
		case 1: //второе действие
		log[2]= works.d00 + works.d1 + works.d2 + "-1 выход из игры";
		do {
		ok = false ;
		event = +prompt(works.d00 + works.d1 + works.d2 + "-1 выход из игры");
		if (event == -1) {
			break;
		}
		else {
			ok = isAnswer(works.d0, event);
		}
		} while (!ok);
		
		    break;
		case -1://второе действие
		    break;
	    default:
		alert("Ошибка");
		}
		break;
		case -1://первое действие
		    break;
	    default:
		alert("Ошибка");
		}
		alert("Спасибо за игру!");
}
//----------------------------------------
function isAnswer(q, event) {
	if (isNaN(event) || !isFinite(event)) {
		alert("Вы ввели недопустимый символ");
		return false;
	}
	else if (event < 1 || event > q) {
		alert ("Ваше число выходит за рамки допустимых чисел");
		return false;
	}
	else {
		return true;
	}
}
function logGame() {
	var num = parseInt(prompt("Введите номер вашего хода"));
	num--;
	if (num>=0 && num < log.length) {
		alert(log[num]);
	} else {
		alert("Не корректный номер ввода! Всего ходов:" +log.length);
	}
}

