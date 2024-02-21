<?php
define('WP_CACHE', true); // WP-Optimize Cache
/**
 * As configurações básicas do WordPress
 *
 * O script de criação wp-config.php usa esse arquivo durante a instalação.
 * Você não precisa usar o site, você pode copiar este arquivo
 * para "wp-config.php" e preencher os valores.
 *
 * Este arquivo contém as seguintes configurações:
 *
 * * Configurações do banco de dados
 * * Chaves secretas
 * * Prefixo do banco de dados
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */
// ** Configurações do banco de dados - Você pode pegar estas informações com o serviço de hospedagem ** //
/** O nome do banco de dados do WordPress */
define( 'DB_NAME', 'site-blog' );
/** Usuário do banco de dados MySQL */
define( 'DB_USER', 'root' );
/** Senha do banco de dados MySQL */
define( 'DB_PASSWORD', '' );
/** Nome do host do MySQL */
define( 'DB_HOST', 'localhost' );
/** Charset do banco de dados a ser usado na criação das tabelas. */
define( 'DB_CHARSET', 'utf8mb4' );
/** O tipo de Collate do banco de dados. Não altere isso se tiver dúvidas. */
define( 'DB_COLLATE', '' );
/**#@+
 * Chaves únicas de autenticação e salts.
 *
 * Altere cada chave para um frase única!
 * Você pode gerá-las
 * usando o {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org
 * secret-key service}
 * Você pode alterá-las a qualquer momento para invalidar quaisquer
 * cookies existentes. Isto irá forçar todos os
 * usuários a fazerem login novamente.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'X(K%wv~e-^qA t^UMKQ_5/[BmCK!t{Yqlqb)X10#8cCFa4uyjUfZ{!:<e|71b^Fa' );
define( 'SECURE_AUTH_KEY',  '[qoY:wj/mt,7Y<E3>VrHl1<:A+98prK>}&.zF- NT>SZUnK/Yj9]|y?#g1hg@CD.' );
define( 'LOGGED_IN_KEY',    '7q8u!lxTeB@nz=0*O6oC3QI[UoMGe<duZa=&i4xR6OZ#OH@x_7/ dyEeZjNikf,%' );
define( 'NONCE_KEY',        'Ge577gLW3^[}=X$#/ZHUZ#w7GvU][Z#3r&y=}x~E|&,yoo&cG^e4.U|ye>p;KrTH' );
define( 'AUTH_SALT',        '%3rb/K6-5}UT&(`=PN];o5{}c*}l*OQupG.2DJ8pJ5>TbPe3Rs2onuN!_JwH,cJf' );
define( 'SECURE_AUTH_SALT', '8X=Tq9Q5ZOGggWo?0aM{*D29xKA%gq%IsVKK@$wi^E:^2K2JHc1Ew_;e@[L};;#:' );
define( 'LOGGED_IN_SALT',   '_3aLu/0<L?B(OqY2tQzx0h4 ?.tZ&W&w/Ju.^ Y>sF3V#L5PQ)68,`qowD1}^4F2' );
define( 'NONCE_SALT',       '{aWGEhf`N,l&D%%5v!S`>];gT6*q|#Jw=XP3;`xBHwm.]E@o%G5P&4>4aDZY/vIO' );
/**#@-*/
/**
 * Prefixo da tabela do banco de dados do WordPress.
 *
 * Você pode ter várias instalações em um único banco de dados se você der
 * um prefixo único para cada um. Somente números, letras e sublinhados!
 */
$table_prefix = 'dcd_blog';
/**
 * Para desenvolvedores: Modo de debug do WordPress.
 *
 * Altere isto para true para ativar a exibição de avisos
 * durante o desenvolvimento. É altamente recomendável que os
 * desenvolvedores de plugins e temas usem o WP_DEBUG
 * em seus ambientes de desenvolvimento.
 *
 * Para informações sobre outras constantes que podem ser utilizadas
 * para depuração, visite o Codex.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );
/* Adicione valores personalizados entre esta linha até "Isto é tudo". */
/* Isto é tudo, pode parar de editar! :) */
/** Caminho absoluto para o diretório WordPress. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}
/** Configura as variáveis e arquivos do WordPress. */
require_once ABSPATH . 'wp-settings.php';