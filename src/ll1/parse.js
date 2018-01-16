import _parse from './_parse' ;

export default function parse ( start , eof , productions, table , stream ) {
	const root = [
		{ 'type' : 'node' , 'nonterminal' : start } ,
		{ 'type' : 'leaf' , 'terminal' : eof } ,
	] ;
	return _parse( eof, productions, table , root , stream , -1 , 0 ).children[0] ;
}
