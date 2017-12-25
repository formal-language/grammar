import EOF from './EOF' ;
import _parse from './_parse' ;

export default function parse ( grammar, table , start , stream ) {
	return _parse( grammar, table , [ start , EOF ] , stream , -1 , 0 ) ;
}
