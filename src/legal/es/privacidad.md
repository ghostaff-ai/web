---
title: Política de privacidad
updated: '[fecha de publicación]'
---

<!--
BORRADOR (2026-11-21). Responsable y titular: Álvaro Francisco Gil, autónomo, hasta que exista la SL
(decidido por los fundadores el 2026-11-21). Se publica cuando estén su NIF y su domicilio y esté revisado. Lo marcado con <mark> está por rellenar o confirmar.
Antes de enseñárselo a Google, Meta o TikTok, que lo revise alguien que sepa de RGPD.
-->

En Ghostaff damos a empresas pequeñas un equipo de agentes de inteligencia artificial que llevan su
registro, hacen el trabajo de rutina y les traen las decisiones. Para eso tratamos datos de las personas
que usan la aplicación y de las cuentas que conectan. Aquí explicamos cuáles, para qué, dónde están y qué
derechos tienes.

## 1. Quién es el responsable

Álvaro Francisco Gil, profesional autónomo que opera con el nombre comercial Ghostaff, con NIF
<mark>[NIF]</mark> y domicilio en <mark>[dirección]</mark>, España («Ghostaff», «nosotros»).
Contacto para cualquier asunto de privacidad: [hola@ghostaff.ai](mailto:hola@ghostaff.ai).

Cuando una empresa usa Ghostaff para tratar datos de terceros (sus clientes, proveedores o empleados que
aparecen en su correo o sus documentos), esa empresa es la responsable de esos datos y Ghostaff actúa como
**encargado del tratamiento**, siguiendo sus instrucciones y con el contrato de encargo que exige el
artículo 28 del RGPD.

## 2. Esta web

ghostaff.ai no usa cookies, ni analítica, ni píxeles de seguimiento, ni fuentes o scripts cargados de
terceros. Si nos escribes un correo, usamos tu dirección y lo que nos cuentes solo para contestarte.

El servidor que entrega la web (Firebase Hosting, de Google) registra, como cualquier servidor, la
dirección IP y el navegador de cada visita para servirla y protegerla de abusos. Google conserva esos
registros un tiempo limitado; nosotros no los usamos para nada más.

## 3. Qué datos tratamos en la aplicación

| Datos | De dónde vienen | Para qué |
|---|---|---|
| **Cuenta**: nombre, correo, organización a la que perteneces | Tú, al darte de alta | Identificarte, darte acceso y avisarte |
| **Registro de tu empresa**: documentos, cuentas, facturas, notas, conversaciones con los agentes y las decisiones que tomas | Tú y tu equipo, y lo que los agentes leen de las cuentas que conectas | Que los agentes hagan su trabajo y te traigan las decisiones |
| **Cuentas conectadas**: el acceso (token) a cada servicio que conectas, la cuenta y los permisos concedidos | El servicio, cuando aceptas en su pantalla | Que los agentes trabajen en ese servicio en nombre de tu empresa |
| **Datos técnicos**: registros de errores y de uso del servicio | La aplicación | Que funcione, seguridad y corregir fallos |

No vendemos datos, no los usamos para publicidad y no los compartimos más allá de lo que explica esta
política.

## 4. Las cuentas que conectas

Solo conectas lo que tú eliges, en la pantalla del propio servicio, y puedes desconectarlo en cualquier
momento desde Conexiones en la aplicación o desde ese servicio. Al desconectar, borramos el acceso.

### Google

Según lo que conectes, pedimos estos permisos, y solo esos:

| Permiso | Para qué |
|---|---|
| Google Calendar (`calendar.events`) | Ver y crear eventos en tu calendario cuando se lo pides a un agente |
| Google Drive y Hojas de cálculo (`drive.file`) | Solo los archivos que tú eliges o que Ghostaff crea; nunca el resto de tu Drive |
| Search Console (`webmasters.readonly`) | Leer cómo aparece tu web en Google |
| Google Analytics (`analytics.readonly`) | Leer las estadísticas de tu web |
| YouTube (`youtube.readonly`) | Leer tu canal y sus estadísticas |
| Perfil de empresa de Google (`business.manage`) | Gestionar la ficha de tu negocio |
| Google Cloud (`cloud-platform`) | Solo si conectas tu propia cuenta de Google Cloud para la IA (Vertex AI) |

El uso y la transferencia a cualquier otra aplicación de la información recibida de las API de Google
cumple la [Política de datos de usuario de los servicios de API de Google](https://developers.google.com/terms/api-services-user-data-policy),
incluidos los requisitos de Uso Limitado. En concreto: usamos esos datos solo para dar a tu empresa las
funciones que ves en Ghostaff; no los transferimos salvo para prestarlas, por seguridad o por obligación
legal; no los usamos para publicidad; ninguna persona los lee salvo con tu permiso, por seguridad o por
obligación legal; y no los usamos para entrenar modelos de inteligencia artificial generales.

### Instagram, Facebook y TikTok

Si conectas tus redes, pedimos los permisos que muestra su pantalla al conectar:
<mark>[Instagram: perfil, publicar contenido, comentarios y estadísticas — confirmar la lista exacta de
la app de Meta]</mark>; TikTok: información básica y estadísticas del perfil, la lista de tus vídeos y
publicar vídeos (`user.info.basic`, `user.info.stats`, `video.list`, `video.publish`). Nada se publica
sin que alguien de tu equipo lo apruebe.

### Otros servicios

Para servicios como Notion, Holded, Stripe o Qonto usamos el conector oficial de cada fabricante, con los
permisos que muestra su pantalla. Pedimos los mínimos: por ejemplo, ninguno que permita mover dinero.

## 5. Base legal

- **Ejecución del contrato** (art. 6.1.b RGPD): la cuenta, el registro de tu empresa y lo que los agentes
  hacen por ella.
- **Tu consentimiento** (art. 6.1.a): cada cuenta que conectas. Lo retiras al desconectarla.
- **Interés legítimo** (art. 6.1.f): la seguridad del servicio y los registros técnicos.
- **Obligación legal** (art. 6.1.c): lo que la ley nos obligue a conservar, como la facturación.

## 6. Dónde están y quién nos ayuda

Guardamos los datos en la **Unión Europea**, cada empresa en su espacio, separado del de las demás. Los
accesos a tus cuentas van cifrados en un almacén de secretos aparte, también en la UE.

| Proveedor | Para qué | Dónde |
|---|---|---|
| Supabase | Base de datos, inicio de sesión y archivos | UE (Fráncfort, Alemania) |
| Google Cloud | Servidores del motor de los agentes y almacén de secretos | UE (Bélgica) |
| Google (Firebase Hosting) | Servir esta web | Red global de Google |
| El proveedor de IA | Generar las respuestas de los agentes con lo necesario de tu registro | <mark>[confirmar: Vertex AI en la UE por defecto]</mark> |

Para hacer su trabajo, los agentes envían al modelo de inteligencia artificial lo que necesitan de tu
registro. Por defecto la IA la ponemos nosotros <mark>[proveedor y región]</mark>. Si tu empresa conecta su
propia cuenta de IA (por ejemplo Anthropic, OpenAI o Google), esos datos van a ese proveedor bajo el
contrato que tu empresa tiene con él, que puede tratarlos fuera de la UE.

Cuando un proveedor trata datos fuera del Espacio Económico Europeo, lo hace con las garantías del RGPD:
decisión de adecuación (como el Marco de Privacidad de Datos UE-EE. UU.) o cláusulas contractuales tipo de
la Comisión Europea. Todos tienen firmado con nosotros un contrato de encargo del tratamiento.

## 7. Cuánto tiempo los guardamos

- Mientras tu empresa tenga cuenta en Ghostaff.
- Al cerrarla, borramos el registro y los accesos en un plazo de <mark>[30]</mark> días, salvo lo que la
  ley obligue a conservar, que bloqueamos hasta que venza ese plazo.
- Los accesos a una cuenta conectada se borran en cuanto la desconectas.
- Los registros técnicos, <mark>[90]</mark> días.

Antes de irte puedes exportarlo todo, y tener activada en todo momento una copia viva en tu Drive o
GitHub.

## 8. Tus derechos

Puedes pedir acceso a tus datos, su rectificación, su supresión, su portabilidad, la limitación de su
tratamiento u oponerte a él, y retirar tu consentimiento cuando quieras, escribiendo a
[hola@ghostaff.ai](mailto:hola@ghostaff.ai). Contestamos en un mes como máximo.

Si crees que no hemos tratado bien tus datos, puedes reclamar ante la Agencia Española de Protección de
Datos ([aepd.es](https://www.aepd.es)).

## 9. Seguridad

Conexiones cifradas, cada empresa aislada de las demás en la base de datos, accesos a tus cuentas en un
almacén de secretos aparte, y nada sale de Ghostaff (un correo, un pago, una publicación) sin que alguien
de tu equipo lo apruebe.

## 10. Menores

Ghostaff es para empresas y no está dirigido a menores de 18 años.

## 11. Cambios

Si cambiamos esta política, lo diremos aquí con su fecha, y por correo si el cambio es importante.
