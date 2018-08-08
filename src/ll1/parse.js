import _parse_lazy from './_parse_lazy' ;

export default async function parse ( start , eof , productions, table , tape ) {
	const root = [
		{ 'type' : 'node' , 'nonterminal' : start } ,
		{ 'type' : 'leaf' , 'terminal' : eof } ,
	] ;
	return await _parse_lazy( eof, productions, table , root , tape , -1 , 0 ).children.next() ;
}
