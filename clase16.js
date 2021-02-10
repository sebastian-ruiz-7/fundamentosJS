var signo=prompt('¿Cúal es tu signo?');

console.log(signo);

signo=signo.toLocaleLowerCase();

console.log(signo);

switch(signo){
    case 'acuario':
        console.log('Intente abandonar los viejos mandatos que le impusieron desde su adolescencia. Momento oportuno para ampliar las aspiraciones y los sueños que tiene guardados.');
        break
    
    case 'tauro':
        console.log('Si pretende sentirse más feliz, use aquello que ha aprendido a lo largo de su vida. Pronto mejorarán las condiciones actuales que lo agobian a diario.');
        break
    
    case 'géminis':
    case 'geminis':
        console.log('Intente mostrase más flexible frente a las situaciones que encare. Si se lo propone, de esta forma, se le presentarán muchas oportunidades únicas.');
        break

    case 'cáncer':
    case 'cancer':
        console.log('Se sentirá agobiado por sus responsabilidades, déjese ayudar por la gente que lo quiere. Procure aceptar los consejos y recapacitar sobre los errores cometidos.');
        break

    case 'leo':
        console.log('Intente aislarse del mundo y sentarse en soledad a reflexionar sobre ciertas cuestiones de su vida que últimamente no lo dejan progresar de la manera que anhela.');

    case 'virgo':
        console.log('Debe tener presente que quienes no comparten sus ideas o decisiones, no siempre son necesariamente sus enemigos. Respete las opiniones de los demás.');
        break

    case 'libra':
        console.log('Si se siente insatisfecho internamente, sepa que deberá enfocarse en planificar un nuevo proyecto de vida que lo haga sentir aún más gratificado.');
        break
    
    case 'escorpio':
        console.log('Transitará por un momento de crisis personal, ya que querrá romper con viejas estructuras de su vida que le impiden sentirse libre. Deje que todo fluya solo.');
        break

    case 'sagitario':
        console.log('Período óptimo para poner en marcha ese plan que tiene y accione las tácticas que determinó para cada uno de sus objetivos. No dude más y hágalo.');
        break

    case 'capricornio':
        console.log('Tenderá a ofenderse por todo y considerar enemigas a todas las personas que lo estiman de verdad, ya que estará muy vulnerable a las críticas en el día de hoy.');
        break

    case 'acurio':
        console.log('Aprenda que todo cambio en la vida siempre es muy constructivo. Momento óptimo para hacer un alto en su vida y ver desde otro punto de vista las cosas.');
        break

    case 'piscis':
        console.log('Ocasión óptima para concluir con todos los proyectos viejos y dedicarse a preparar las nuevas metas que se propondrá en su vida para los próximos meses.');
        break
        
    default:
        console.log('No se encontró su signo. Por favor, intente de nuevo');
}