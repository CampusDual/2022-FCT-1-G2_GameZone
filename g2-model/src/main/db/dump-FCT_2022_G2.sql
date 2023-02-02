--
-- PostgreSQL database dump
--

-- Dumped from database version 11.16 (Debian 11.16-0+deb10u1)
-- Dumped by pg_dump version 14.2

-- Started on 2023-02-02 15:29:57

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

DROP DATABASE "FCT_2022_G2";
--
-- TOC entry 3101 (class 1262 OID 189950)
-- Name: FCT_2022_G2; Type: DATABASE; Schema: -; Owner: -
--

CREATE DATABASE "FCT_2022_G2" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'en_US.UTF-8';


\connect "FCT_2022_G2"

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 3 (class 2615 OID 2200)
-- Name: public; Type: SCHEMA; Schema: -; Owner: -
--

CREATE SCHEMA public;


--
-- TOC entry 3102 (class 0 OID 0)
-- Dependencies: 3
-- Name: SCHEMA public; Type: COMMENT; Schema: -; Owner: -
--

COMMENT ON SCHEMA public IS 'standard public schema';


SET default_tablespace = '';

--
-- TOC entry 222 (class 1259 OID 192112)
-- Name: event_users; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.event_users (
    id integer NOT NULL,
    event_id integer,
    user_name character varying(25)
);


--
-- TOC entry 221 (class 1259 OID 192110)
-- Name: event_users_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.event_users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 3103 (class 0 OID 0)
-- Dependencies: 221
-- Name: event_users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.event_users_id_seq OWNED BY public.event_users.id;


--
-- TOC entry 228 (class 1259 OID 192136)
-- Name: events; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.events (
    id integer NOT NULL,
    event_name character varying(100),
    description character varying(200),
    start_date date,
    end_date date,
    users_max integer
);


--
-- TOC entry 227 (class 1259 OID 192134)
-- Name: events_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.events_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 3104 (class 0 OID 0)
-- Dependencies: 227
-- Name: events_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.events_id_seq OWNED BY public.events.id;


--
-- TOC entry 216 (class 1259 OID 190918)
-- Name: favorite_games; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.favorite_games (
    game_id integer NOT NULL,
    user_id character varying(50) NOT NULL,
    id integer NOT NULL,
    game_name character varying
);


--
-- TOC entry 215 (class 1259 OID 190916)
-- Name: favorite_games_game_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.favorite_games_game_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 3105 (class 0 OID 0)
-- Dependencies: 215
-- Name: favorite_games_game_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.favorite_games_game_id_seq OWNED BY public.favorite_games.game_id;


--
-- TOC entry 217 (class 1259 OID 191008)
-- Name: favorite_games_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.favorite_games_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 3106 (class 0 OID 0)
-- Dependencies: 217
-- Name: favorite_games_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.favorite_games_id_seq OWNED BY public.favorite_games.id;


--
-- TOC entry 214 (class 1259 OID 190891)
-- Name: games; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.games (
    id integer NOT NULL,
    game_name character varying(50),
    game_id integer
);


--
-- TOC entry 229 (class 1259 OID 192241)
-- Name: games_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.games_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 3107 (class 0 OID 0)
-- Dependencies: 229
-- Name: games_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.games_id_seq OWNED BY public.games.id;


--
-- TOC entry 219 (class 1259 OID 191196)
-- Name: subscription_types; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.subscription_types (
    id integer NOT NULL,
    sub_type character varying(15),
    price numeric
);


--
-- TOC entry 218 (class 1259 OID 191194)
-- Name: subscription_types_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.subscription_types_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 3108 (class 0 OID 0)
-- Dependencies: 218
-- Name: subscription_types_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.subscription_types_id_seq OWNED BY public.subscription_types.id;


--
-- TOC entry 209 (class 1259 OID 190161)
-- Name: ti18n; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.ti18n (
    id_i18n integer NOT NULL,
    class_name character varying(150),
    i18n_description character varying(250)
);


--
-- TOC entry 208 (class 1259 OID 190159)
-- Name: ti18n_id_i18n_seq; Type: SEQUENCE; Schema: public; Owner: -
--

ALTER TABLE public.ti18n ALTER COLUMN id_i18n ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.ti18n_id_i18n_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 211 (class 1259 OID 190169)
-- Name: ti18n_value; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.ti18n_value (
    id_i18n_value integer NOT NULL,
    id_i18n integer NOT NULL,
    "KEY" character varying(250),
    es_es character varying(10485760),
    en_us character varying(10485760),
    gl_es character varying(10485760)
);


--
-- TOC entry 210 (class 1259 OID 190167)
-- Name: ti18n_value_id_i18n_value_seq; Type: SEQUENCE; Schema: public; Owner: -
--

ALTER TABLE public.ti18n_value ALTER COLUMN id_i18n_value ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.ti18n_value_id_i18n_value_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 224 (class 1259 OID 192120)
-- Name: tour_users; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.tour_users (
    id integer NOT NULL,
    tour_id integer,
    user_name character varying(25)
);


--
-- TOC entry 223 (class 1259 OID 192118)
-- Name: tour_users_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.tour_users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 3109 (class 0 OID 0)
-- Dependencies: 223
-- Name: tour_users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.tour_users_id_seq OWNED BY public.tour_users.id;


--
-- TOC entry 226 (class 1259 OID 192128)
-- Name: tournaments; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.tournaments (
    id integer NOT NULL,
    tour_name character varying(40),
    description character varying(200),
    start_date date,
    end_date date,
    prize character varying(100),
    users_max integer
);


--
-- TOC entry 225 (class 1259 OID 192126)
-- Name: tournaments_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.tournaments_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 3110 (class 0 OID 0)
-- Dependencies: 225
-- Name: tournaments_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.tournaments_id_seq OWNED BY public.tournaments.id;


--
-- TOC entry 203 (class 1259 OID 190129)
-- Name: trequest_statistics; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.trequest_statistics (
    id_request_statistics integer NOT NULL,
    service_name character varying(255),
    method_name character varying(50),
    user_name character varying(50),
    execution_date date,
    execution_time integer,
    method_params character varying(5000),
    service_exception character varying(5000)
);


--
-- TOC entry 198 (class 1259 OID 190091)
-- Name: trole; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.trole (
    id_rolename integer NOT NULL,
    rolename character varying(255),
    xmlclientpermission character varying(10485760)
);


--
-- TOC entry 197 (class 1259 OID 190089)
-- Name: trole_id_rolename_seq; Type: SEQUENCE; Schema: public; Owner: -
--

ALTER TABLE public.trole ALTER COLUMN id_rolename ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.trole_id_rolename_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 213 (class 1259 OID 190180)
-- Name: trole_server_permission; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.trole_server_permission (
    id_role_server_permission integer NOT NULL,
    id_rolename integer,
    id_server_permission integer
);


--
-- TOC entry 212 (class 1259 OID 190178)
-- Name: trole_server_permission_id_role_server_permission_seq; Type: SEQUENCE; Schema: public; Owner: -
--

ALTER TABLE public.trole_server_permission ALTER COLUMN id_role_server_permission ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.trole_server_permission_id_role_server_permission_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 202 (class 1259 OID 190120)
-- Name: tserver_permission; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.tserver_permission (
    id_server_permission integer NOT NULL,
    permission_name character varying(10485760)
);


--
-- TOC entry 201 (class 1259 OID 190118)
-- Name: tserver_permission_id_server_permission_seq; Type: SEQUENCE; Schema: public; Owner: -
--

ALTER TABLE public.tserver_permission ALTER COLUMN id_server_permission ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.tserver_permission_id_server_permission_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 205 (class 1259 OID 190139)
-- Name: tsetting; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.tsetting (
    id_setting integer NOT NULL,
    setting_key character varying(10485760),
    setting_value character varying(10485760),
    setting_comment character varying(10485760)
);


--
-- TOC entry 204 (class 1259 OID 190137)
-- Name: tsetting_id_setting_seq; Type: SEQUENCE; Schema: public; Owner: -
--

ALTER TABLE public.tsetting ALTER COLUMN id_setting ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.tsetting_id_setting_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 196 (class 1259 OID 190082)
-- Name: tuser; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.tuser (
    user_ character varying(50) NOT NULL,
    password character varying(50),
    name character varying(50),
    surname character varying(50),
    email character varying(50),
    nif character varying(50),
    userblocked timestamp without time zone,
    lastpasswordupdate timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    firstlogin boolean DEFAULT true,
    birthday date,
    sub_id integer,
    expiration_date date,
    sub_date date
);


--
-- TOC entry 207 (class 1259 OID 190150)
-- Name: tuser_preference; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.tuser_preference (
    id_user_preference integer NOT NULL,
    preference_name character varying(150),
    user_login character varying(150),
    preference_value character varying(10485760)
);


--
-- TOC entry 206 (class 1259 OID 190148)
-- Name: tuser_preference_id_user_preference_seq; Type: SEQUENCE; Schema: public; Owner: -
--

ALTER TABLE public.tuser_preference ALTER COLUMN id_user_preference ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.tuser_preference_id_user_preference_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 200 (class 1259 OID 190102)
-- Name: tuser_role; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.tuser_role (
    id_user_role integer NOT NULL,
    id_rolename integer,
    user_ character varying(50)
);


--
-- TOC entry 199 (class 1259 OID 190100)
-- Name: tuser_role_id_user_role_seq; Type: SEQUENCE; Schema: public; Owner: -
--

ALTER TABLE public.tuser_role ALTER COLUMN id_user_role ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.tuser_role_id_user_role_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 220 (class 1259 OID 191797)
-- Name: tuseradmin; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.tuseradmin (
    user_ character varying(50) NOT NULL,
    password character varying(50),
    name character varying(50),
    surname character varying(50),
    email character varying(50),
    nif character varying(50),
    userblocked timestamp without time zone,
    lastpasswordupdate timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    firstlogin boolean DEFAULT true,
    birthday date,
    sub_id integer,
    expiration_date date,
    sub_date date
);


--
-- TOC entry 2889 (class 2604 OID 192115)
-- Name: event_users id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.event_users ALTER COLUMN id SET DEFAULT nextval('public.event_users_id_seq'::regclass);


--
-- TOC entry 2892 (class 2604 OID 192139)
-- Name: events id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.events ALTER COLUMN id SET DEFAULT nextval('public.events_id_seq'::regclass);


--
-- TOC entry 2884 (class 2604 OID 190921)
-- Name: favorite_games game_id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.favorite_games ALTER COLUMN game_id SET DEFAULT nextval('public.favorite_games_game_id_seq'::regclass);


--
-- TOC entry 2885 (class 2604 OID 191010)
-- Name: favorite_games id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.favorite_games ALTER COLUMN id SET DEFAULT nextval('public.favorite_games_id_seq'::regclass);


--
-- TOC entry 2883 (class 2604 OID 192243)
-- Name: games id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.games ALTER COLUMN id SET DEFAULT nextval('public.games_id_seq'::regclass);


--
-- TOC entry 2886 (class 2604 OID 191199)
-- Name: subscription_types id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.subscription_types ALTER COLUMN id SET DEFAULT nextval('public.subscription_types_id_seq'::regclass);


--
-- TOC entry 2890 (class 2604 OID 192123)
-- Name: tour_users id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.tour_users ALTER COLUMN id SET DEFAULT nextval('public.tour_users_id_seq'::regclass);


--
-- TOC entry 2891 (class 2604 OID 192131)
-- Name: tournaments id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.tournaments ALTER COLUMN id SET DEFAULT nextval('public.tournaments_id_seq'::regclass);


--
-- TOC entry 3088 (class 0 OID 192112)
-- Dependencies: 222
-- Data for Name: event_users; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.event_users VALUES (1, 1, 'julito');
INSERT INTO public.event_users VALUES (2, 2, 'julito');
INSERT INTO public.event_users VALUES (3, 3, 'julito');
INSERT INTO public.event_users VALUES (4, 3, 'juliverta');
INSERT INTO public.event_users VALUES (5, 1, 'juliverta');
INSERT INTO public.event_users VALUES (6, 4, 'LokitaforTom');
INSERT INTO public.event_users VALUES (7, 3, 'Cascou');
INSERT INTO public.event_users VALUES (8, 4, 'Cascou');
INSERT INTO public.event_users VALUES (9, 5, 'LokitaforTom');
INSERT INTO public.event_users VALUES (10, 3, 'helena');
INSERT INTO public.event_users VALUES (11, 4, 'JasonM');
INSERT INTO public.event_users VALUES (12, 1, 'demo');
INSERT INTO public.event_users VALUES (13, 2, 'demo');
INSERT INTO public.event_users VALUES (14, 3, 'demo');
INSERT INTO public.event_users VALUES (15, 4, 'demo');
INSERT INTO public.event_users VALUES (16, 5, 'demo');
INSERT INTO public.event_users VALUES (17, 1, 'Juan');
INSERT INTO public.event_users VALUES (18, 2, 'Juan');
INSERT INTO public.event_users VALUES (19, 3, 'Juan');
INSERT INTO public.event_users VALUES (20, 4, 'Juan');
INSERT INTO public.event_users VALUES (21, 5, 'Juan');
INSERT INTO public.event_users VALUES (22, 1, 'Diego');
INSERT INTO public.event_users VALUES (23, 2, 'Diego');
INSERT INTO public.event_users VALUES (24, 3, 'Diego');
INSERT INTO public.event_users VALUES (25, 4, 'Diego');
INSERT INTO public.event_users VALUES (26, 5, 'Diego');
INSERT INTO public.event_users VALUES (27, 5, 'pepito');
INSERT INTO public.event_users VALUES (28, 5, 'javicho');
INSERT INTO public.event_users VALUES (29, 3, 'paula92');


--
-- TOC entry 3094 (class 0 OID 192136)
-- Dependencies: 228
-- Data for Name: events; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.events VALUES (1, 'Valorant Cosplays', 'Reunion para todos nuestro cosplayers favoritos, vistanse con sus mejores galas', '2022-07-03', '2022-07-03', NULL);
INSERT INTO public.events VALUES (5, 'Incursion de Zapdos', 'Ven a capturar a uno de los pajaros legendarios y pasa un buen rato a la vez', '2022-07-18', '2022-07-18', NULL);
INSERT INTO public.events VALUES (4, 'Art Party de FFXIV', 'No todo va a ser conquistar mazmorras y megarse contra otros jugadores, ahora toca dibujar un poco y pasar un buen rato', '2022-07-20', '2022-07-20', NULL);
INSERT INTO public.events VALUES (3, 'Clases profesionales de League of legends', 'Algunos de los mejores jugadores vendran a eseñaerte sus secretos y tips para que por fin seas capaz de dar lo mejor de ti', '2022-07-16', '2022-07-19', NULL);
INSERT INTO public.events VALUES (2, 'Meeting con desarrolladores ', 'Vendran los desarrolladores de tus juegos favoritos y podras hablar con ellos', '2022-07-22', '2022-07-24', NULL);


--
-- TOC entry 3082 (class 0 OID 190918)
-- Dependencies: 216
-- Data for Name: favorite_games; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.favorite_games VALUES (11, 'Juan', 92, 'Super Mario Odyssey');
INSERT INTO public.favorite_games VALUES (19, 'Juan', 95, 'Marvel''s Spider-Man');
INSERT INTO public.favorite_games VALUES (20, 'Juan', 96, 'Days Gone');
INSERT INTO public.favorite_games VALUES (21, 'Juan', 97, 'Cyberpunk 2077');
INSERT INTO public.favorite_games VALUES (22, 'Juan', 98, 'Grav');
INSERT INTO public.favorite_games VALUES (23, 'Juan', 99, 'Tanzia');
INSERT INTO public.favorite_games VALUES (24, 'Juan', 100, 'Red Dead Redemption 2');
INSERT INTO public.favorite_games VALUES (9, 'Juan', 110, 'The Legend of Zelda: Breath of the Wild');
INSERT INTO public.favorite_games VALUES (10, 'Juan', 113, 'Undertale');
INSERT INTO public.favorite_games VALUES (13, 'Juan', 114, 'God of War');
INSERT INTO public.favorite_games VALUES (25, 'Juan', 115, 'The Last of Us Part II');
INSERT INTO public.favorite_games VALUES (26, 'Juan', 116, 'Hades');
INSERT INTO public.favorite_games VALUES (9, 'peponcho', 119, 'The Legend of Zelda: Breath of the Wild');
INSERT INTO public.favorite_games VALUES (27, 'peponcho', 120, 'The Elder Scrolls V: Skyrim');
INSERT INTO public.favorite_games VALUES (9, 'pepito', 122, 'The Legend of Zelda: Breath of the Wild');
INSERT INTO public.favorite_games VALUES (11, 'javicho', 125, 'Super Mario Odyssey');
INSERT INTO public.favorite_games VALUES (28, 'javicho', 126, 'Paper Mario: The Thousand-Year Door');
INSERT INTO public.favorite_games VALUES (11, 'Juanito', 127, 'Super Mario Odyssey');
INSERT INTO public.favorite_games VALUES (11, 'Sandrita', 131, 'Super Mario Odyssey');
INSERT INTO public.favorite_games VALUES (9, 'paula92', 132, 'The Legend of Zelda: Breath of the Wild');
INSERT INTO public.favorite_games VALUES (9, 'sonia92', 134, 'The Legend of Zelda: Breath of the Wild');


--
-- TOC entry 3080 (class 0 OID 190891)
-- Dependencies: 214
-- Data for Name: games; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.games VALUES (4, 'Borderlands 3', 19164);
INSERT INTO public.games VALUES (5, 'VALORANT', 126459);
INSERT INTO public.games VALUES (6, 'Tears of Avia', 13196);
INSERT INTO public.games VALUES (7, 'Planet Alpha', 28070);
INSERT INTO public.games VALUES (8, 'Immortal: Unchained', 55038);
INSERT INTO public.games VALUES (9, 'The Legend of Zelda: Breath of the Wild', 7346);
INSERT INTO public.games VALUES (10, 'Undertale', 12517);
INSERT INTO public.games VALUES (11, 'Super Mario Odyssey', 26758);
INSERT INTO public.games VALUES (12, 'Super Mario 3D World', 2180);
INSERT INTO public.games VALUES (13, 'God of War', 19560);
INSERT INTO public.games VALUES (14, 'Dota 2', 2963);
INSERT INTO public.games VALUES (15, 'Eternity: The Last Unicorn', 96217);
INSERT INTO public.games VALUES (16, 'Need for Speed: Most Wanted', 3193);
INSERT INTO public.games VALUES (17, NULL, 170021);
INSERT INTO public.games VALUES (18, NULL, 132642);
INSERT INTO public.games VALUES (19, NULL, 19565);
INSERT INTO public.games VALUES (20, NULL, 19561);
INSERT INTO public.games VALUES (21, NULL, 1877);
INSERT INTO public.games VALUES (22, NULL, 18290);
INSERT INTO public.games VALUES (23, NULL, 28309);
INSERT INTO public.games VALUES (24, NULL, 25076);
INSERT INTO public.games VALUES (25, NULL, 26192);
INSERT INTO public.games VALUES (26, NULL, 113112);
INSERT INTO public.games VALUES (27, NULL, 472);
INSERT INTO public.games VALUES (28, NULL, 3349);
INSERT INTO public.games VALUES (29, NULL, 20);


--
-- TOC entry 3085 (class 0 OID 191196)
-- Dependencies: 219
-- Data for Name: subscription_types; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.subscription_types VALUES (1, 'Mensual', 9.99);
INSERT INTO public.subscription_types VALUES (2, 'Trimestral', 14.99);
INSERT INTO public.subscription_types VALUES (3, 'Anual', 75.99);


--
-- TOC entry 3075 (class 0 OID 190161)
-- Dependencies: 209
-- Data for Name: ti18n; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.ti18n VALUES (0, 'i18n.bundle', 'Resource bundle in database');


--
-- TOC entry 3077 (class 0 OID 190169)
-- Dependencies: 211
-- Data for Name: ti18n_value; Type: TABLE DATA; Schema: public; Owner: -
--



--
-- TOC entry 3090 (class 0 OID 192120)
-- Dependencies: 224
-- Data for Name: tour_users; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.tour_users VALUES (1, 1, 'juliverta');
INSERT INTO public.tour_users VALUES (2, 1, 'julito');
INSERT INTO public.tour_users VALUES (3, 2, 'julito');
INSERT INTO public.tour_users VALUES (4, 4, 'JasonM');
INSERT INTO public.tour_users VALUES (5, 4, 'LokitaforTom');
INSERT INTO public.tour_users VALUES (6, 3, 'LokitaforTom');
INSERT INTO public.tour_users VALUES (7, 5, 'julito');
INSERT INTO public.tour_users VALUES (9, 4, 'helena');
INSERT INTO public.tour_users VALUES (10, 1, 'helena');
INSERT INTO public.tour_users VALUES (34, 1, 'Juan');
INSERT INTO public.tour_users VALUES (35, 2, 'Juan');
INSERT INTO public.tour_users VALUES (36, 5, 'Juan');
INSERT INTO public.tour_users VALUES (38, 1, 'demo');
INSERT INTO public.tour_users VALUES (39, 1, 'Diego');
INSERT INTO public.tour_users VALUES (40, 2, 'Diego');
INSERT INTO public.tour_users VALUES (41, 4, 'Diego');
INSERT INTO public.tour_users VALUES (42, 5, 'Diego');
INSERT INTO public.tour_users VALUES (43, 3, 'Diego');
INSERT INTO public.tour_users VALUES (44, 2, 'pepito');
INSERT INTO public.tour_users VALUES (45, 2, 'javicho');
INSERT INTO public.tour_users VALUES (46, 3, 'pablo');
INSERT INTO public.tour_users VALUES (47, 4, 'pablo');
INSERT INTO public.tour_users VALUES (48, 2, 'pablo');
INSERT INTO public.tour_users VALUES (49, 3, 'Sandrita');
INSERT INTO public.tour_users VALUES (50, 5, 'paula92');
INSERT INTO public.tour_users VALUES (51, 3, 'sonia92');


--
-- TOC entry 3092 (class 0 OID 192128)
-- Dependencies: 226
-- Data for Name: tournaments; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.tournaments VALUES (3, 'Copa Arcoiris', 'Pique online de Mario Kart para saber quien es el proximo Dominic Toreto del reino champiñon', '2022-07-13', '2022-07-13', 'Una copia del nuevo Mario Kart', 32);
INSERT INTO public.tournaments VALUES (2, 'Valorant Champions', 'Torneo para los mejores jugadores de valorant de nuestro subscriptores', '2022-07-22', '2022-07-22', '250€', NULL);
INSERT INTO public.tournaments VALUES (4, 'Mortal Street', 'Torneo de Mortal Kombat y Street Fighter', '2022-07-28', '2022-07-28', 'Una clase personalizada del arte marcial que quieras', 64);
INSERT INTO public.tournaments VALUES (5, 'Mounstros de bolsillo', 'Saca a tus mejores animales de pelea para pasarlo en grande mientras disfrutas de la mejor comunidad', '2022-07-30', '2022-07-30', 'Una copia de ambas nuevas entregas de Pokemon', 128);
INSERT INTO public.tournaments VALUES (1, 'CSGO hasta que salga el sol', 'Una noche te partidas sin parar del clasico CSGO', '2022-07-05', '2022-07-05', 'Visita a la oficinas centrales de Valve', 16);


--
-- TOC entry 3069 (class 0 OID 190129)
-- Dependencies: 203
-- Data for Name: trequest_statistics; Type: TABLE DATA; Schema: public; Owner: -
--



--
-- TOC entry 3064 (class 0 OID 190091)
-- Dependencies: 198
-- Data for Name: trole; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.trole VALUES (0, 'admin', '<?xml version="1.0" encoding="UTF-8"?><security></security>');


--
-- TOC entry 3079 (class 0 OID 190180)
-- Dependencies: 213
-- Data for Name: trole_server_permission; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.trole_server_permission VALUES (0, 0, 0);


--
-- TOC entry 3068 (class 0 OID 190120)
-- Dependencies: 202
-- Data for Name: tserver_permission; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.tserver_permission VALUES (0, 'com.ontimize.jee.common.services.user.IUserInformationService/getUserInformation');


--
-- TOC entry 3071 (class 0 OID 190139)
-- Dependencies: 205
-- Data for Name: tsetting; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.tsetting VALUES (0, 'mail_host', 'smtp.gmail.com', 'Host del servidor');
INSERT INTO public.tsetting VALUES (1, 'mail_port', '587', 'Puerto del servidor de email');
INSERT INTO public.tsetting VALUES (2, 'mail_protocol', 'smtp', 'Protocolo de env\u005cu00edo de mails');
INSERT INTO public.tsetting VALUES (3, 'mail_user', 'mi.mail@example.com', 'Usuario para el env\u005cu00edo de mails');
INSERT INTO public.tsetting VALUES (4, 'mail_password', 'mis_credenciales', 'Password del servidor de mail');
INSERT INTO public.tsetting VALUES (5, 'mail_encoding', 'UTF-8', 'Codificaci\u005cu00f3n de mails');
INSERT INTO public.tsetting VALUES (6, 'mail_properties', 'mail.smtp.auth:true;mail.smtp.starttls.enable:true;', 'Propiedades de mails');
INSERT INTO public.tsetting VALUES (7, 'report_folder', 'C:/applications/ontimize-boot-app/reports', 'Carpeta de las plantillas de report');


--
-- TOC entry 3062 (class 0 OID 190082)
-- Dependencies: 196
-- Data for Name: tuser; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.tuser VALUES ('pepiño', '1234', 'pepe', 'gonzalez', 'pasp@gmail.com', NULL, NULL, '2022-06-09 10:13:38.725531', true, '2022-06-09', 1, '2022-07-03', '2022-06-03');
INSERT INTO public.tuser VALUES ('Dieguito', '1234', 'Diego', 'Perez', 'dieguito@gmail.com', NULL, NULL, '2022-06-15 10:35:47.199808', true, '2002-04-09', 3, '2023-02-25', '2022-02-25');
INSERT INTO public.tuser VALUES ('JasonM', '1234', 'jason', 'pepito', 'jasonsito@gmail.com', NULL, NULL, '2022-06-03 10:06:44.402996', true, '2022-06-03', 1, '2022-06-03', '2022-05-03');
INSERT INTO public.tuser VALUES ('Pablito', '1234', 'Pablo', 'Perez', 'pablito1234@gmail.com', NULL, NULL, '2022-06-03 11:24:30.599105', true, '2022-06-03', 3, '2023-06-03', '2022-06-03');
INSERT INTO public.tuser VALUES ('Juan2', '1234', 'Juan4', 'Lopez', 'juan2@gmail.com', NULL, NULL, '2022-06-03 12:06:59.38971', true, '2022-06-03', 2, '2022-07-03', '2022-05-03');
INSERT INTO public.tuser VALUES ('LokitaforTom', '1234', 'Sofia', 'Perez', 'lokitafortom@gmail.com', NULL, NULL, '2022-06-15 10:40:19.74995', true, '2001-02-06', 2, '2022-08-25', '2022-03-25');
INSERT INTO public.tuser VALUES ('Cascou', '1234', 'Roberto', 'Alvarez', 'cascou3@gmail.com', NULL, NULL, '2022-06-15 10:44:08.737906', true, '1998-10-28', 2, '2022-09-15', '2022-06-15');
INSERT INTO public.tuser VALUES ('Marquitos002', '1234', 'Marcos', 'Trillo', 'marquiiitos@gmail.com', NULL, NULL, '2022-06-15 10:48:03.119682', true, '2003-04-30', 3, '2023-04-10', '2022-05-10');
INSERT INTO public.tuser VALUES ('Juancito2', '1234', 'Juan', 'Alvarez', 'juancito@gmail.com', NULL, NULL, '2022-06-20 13:57:30.957499', true, '2000-11-25', 3, '2022-06-21', '2021-06-21');
INSERT INTO public.tuser VALUES ('Pececito', '1234', 'Pepe', 'Hernandez', 'pepe@gmail.com', NULL, NULL, '2022-06-20 14:00:39.5376', true, '1995-04-15', 3, '2022-07-16', '2021-07-16');
INSERT INTO public.tuser VALUES ('Cathy vipi', '1234', 'Xokas', 'wow', 'xokas4@gmail.com', NULL, NULL, '2022-06-20 14:02:46.747715', true, '1998-08-26', 3, '2022-08-16', '2021-08-16');
INSERT INTO public.tuser VALUES ('Mixwell', '1234', 'Padre', 'Fernandez', 'padre24@gmail.com', NULL, NULL, '2022-06-20 14:04:47.649649', true, '1997-10-17', 3, '2022-09-16', '2021-09-16');
INSERT INTO public.tuser VALUES ('IlloFran', '1234', 'Juan', 'Chouciño', 'fraaan@gmail.com', NULL, NULL, '2022-06-20 14:07:42.688576', true, '2000-11-17', 3, '2022-10-17', '2021-10-17');
INSERT INTO public.tuser VALUES ('Luuucia', '1234', 'Lucia', 'Gonzalez', 'lucigo@gmail.com', NULL, NULL, '2022-06-20 14:12:41.72138', true, '2002-04-25', 2, '2021-11-17', '2021-11-17');
INSERT INTO public.tuser VALUES ('Ammbber', '1234', 'Amber', 'Trillo', 'amber@gmail.com', NULL, NULL, '2022-06-20 14:14:14.468752', true, '1998-04-25', 3, '2022-11-17', '2021-11-17');
INSERT INTO public.tuser VALUES ('Captain', '1234', 'Jhoony', 'Deep', 'captain@gmail.com', NULL, NULL, '2022-06-20 14:15:30.841895', true, '1998-04-25', 3, '2022-11-17', '2021-11-17');
INSERT INTO public.tuser VALUES ('Juan', '1234', 'Juan', 'Alvarez', 'juanito@gmail.com', NULL, NULL, '2022-06-20 14:16:49.102066', true, '1997-04-25', 1, '2021-12-17', '2021-11-17');
INSERT INTO public.tuser VALUES ('Pedrito', '1234', 'Pedro', 'Gonzalez', 'pedrito@gmail.com', NULL, NULL, '2022-06-20 14:30:35.479681', true, '1997-04-25', 3, '2021-05-17', '2021-05-17');
INSERT INTO public.tuser VALUES ('peponcho', '1234', 'Pepe', 'Lorenzo', 'pepe@gmail.com', NULL, NULL, '2022-06-29 09:45:34.245957', true, '2022-06-29', 3, '2023-06-29', NULL);
INSERT INTO public.tuser VALUES ('juliverta', '1234', 'julia', 'alfonsa', 'diosa@gmail.com', NULL, NULL, '2022-05-11 15:42:17.752849', true, '2002-04-19', 1, '2022-07-03', '2022-06-03');
INSERT INTO public.tuser VALUES ('Alverto', '1234', 'Alverto', 'Fernandez', 'alverto@gmail.com', NULL, NULL, '2022-06-21 09:51:54.775414', true, '1993-04-25', 3, '2022-12-17', '2021-12-17');
INSERT INTO public.tuser VALUES ('Diego', '1234', 'Diego', 'Gonzalez', 'diego@gmail.com', NULL, NULL, '2022-06-21 09:54:20.113475', true, '1999-06-28', 2, '2022-02-17', '2021-12-17');
INSERT INTO public.tuser VALUES ('Alvertito', '1234', 'Alverto', 'Fernandez', 'alfer@gmail.com', NULL, NULL, '2022-06-21 10:57:09.523936', true, '1999-06-28', 2, '2022-02-17', '2021-12-17');
INSERT INTO public.tuser VALUES ('Juancito', '1234', 'Juan', 'Gonzalez', 'juan4@gmail.com', NULL, NULL, '2022-06-21 10:58:01.917216', true, '1989-06-28', 1, '2022-02-17', '2022-01-17');
INSERT INTO public.tuser VALUES ('Iker', '1234', 'Iker', 'Corral', 'iker@gmail.com', NULL, NULL, '2022-06-21 11:00:51.473208', true, '1995-04-15', 2, '2022-07-17', '2022-04-17');
INSERT INTO public.tuser VALUES ('pepito', '1234', 'Pepe', 'Vales', 'pepe@gmail.com', NULL, NULL, '2022-06-29 10:04:03.240312', true, '2022-06-29', 3, '2023-06-29', NULL);
INSERT INTO public.tuser VALUES ('demo', 'demouser', 'demo', 'demo', NULL, '', NULL, NULL, true, NULL, NULL, '2022-07-01', NULL);
INSERT INTO public.tuser VALUES ('Maria', '1234', 'Maria', 'Perez', 'maria@gmail.com', NULL, NULL, '2022-06-21 11:04:19.411523', true, '1995-04-15', 1, '2022-05-17', '2022-04-17');
INSERT INTO public.tuser VALUES ('Fran', '1234', 'Fran', 'Diaz', 'fran@gmail.com', NULL, NULL, '2022-06-21 11:05:00.19928', true, '1995-04-15', 1, '2022-05-17', '2022-04-17');
INSERT INTO public.tuser VALUES ('Juana', '1234', 'Juana', 'Rojas', 'juana@gmail.com', NULL, NULL, '2022-06-21 11:10:53.855734', true, '1995-04-15', 2, '2022-10-17', '2021-07-17');
INSERT INTO public.tuser VALUES ('helena', '1234', 'helena', 'perez', 'helenita57@gmail.com', NULL, NULL, '2022-05-20 12:05:36.876087', true, '2022-05-20', NULL, NULL, NULL);
INSERT INTO public.tuser VALUES ('juanillo', '1234', 'juan', 'alberto', 'juan@gmail.com', NULL, NULL, '2022-06-01 16:03:57.598074', true, '2022-06-01', NULL, NULL, NULL);
INSERT INTO public.tuser VALUES ('javicho', '1234', 'Javier', 'Martinez', 'javi@gmail.com', NULL, NULL, '2022-06-29 10:36:53.393538', true, '2022-06-29', 3, '2023-06-29', NULL);
INSERT INTO public.tuser VALUES ('Manuel', '1234', 'Manuel', 'Garcia', 'manuel@gmail.com', NULL, NULL, '2022-06-21 11:11:43.98969', true, '1995-04-15', 2, '2022-10-17', '2021-07-17');
INSERT INTO public.tuser VALUES ('pablo', '1234', 'Pablo', 'Martinez', 'pablo@gmail.com', NULL, NULL, '2022-06-29 10:57:27.590912', true, '2022-06-29', NULL, NULL, NULL);
INSERT INTO public.tuser VALUES ('Juanito', '1234', 'pepe', 'dominguez', 'mooiotaben@a.com', NULL, NULL, '2022-06-29 11:05:51.980736', true, '2022-06-29', NULL, NULL, NULL);
INSERT INTO public.tuser VALUES ('Mauricio', '1234', 'Mauricio', 'Garcia', 'mauricio@gmail.com', NULL, NULL, '2022-06-21 11:12:13.829647', true, '1995-04-15', 2, '2022-11-17', '2021-08-17');
INSERT INTO public.tuser VALUES ('Nicolas', '1234', 'Nicolas', 'Romero', 'nicoo@gmail.com', NULL, NULL, '2022-06-21 11:12:57.665977', true, '1995-04-15', 1, '2022-09-17', '2021-08-17');
INSERT INTO public.tuser VALUES ('Carlos', '1234', 'Carlos', 'Vazquez', 'carlos@gmail.com', NULL, NULL, '2022-06-21 11:14:04.618927', true, '1995-04-15', 1, '2022-09-17', '2021-08-17');
INSERT INTO public.tuser VALUES ('Angel', '1234', 'Angel', 'Florez', 'angel@gmail.com', NULL, NULL, '2022-06-21 11:14:37.196046', true, '1995-04-15', 1, '2022-09-17', '2021-08-17');
INSERT INTO public.tuser VALUES ('Sara', '1234', 'Sara', 'Valenzuela', 'sara@gmail.com', NULL, NULL, '2022-06-21 11:15:48.911826', true, '1995-04-15', 1, '2021-07-17', '2021-06-17');
INSERT INTO public.tuser VALUES ('Elba', '1234', 'Elba', 'Ramirez', 'elba@gmail.com', NULL, NULL, '2022-06-21 11:16:23.609769', true, '1995-04-15', 2, '2021-09-17', '2021-06-17');
INSERT INTO public.tuser VALUES ('Sarita', '1234', 'Sara', 'Martinez', 'saraita@gmail.com', NULL, NULL, '2022-06-21 11:29:53.229814', true, '1995-04-15', 2, '2021-12-17', '2021-09-17');
INSERT INTO public.tuser VALUES ('Helenita', '1234', 'Helena', 'Flores', 'helena@gmail.com', NULL, NULL, '2022-06-21 11:30:28.539911', true, '1995-04-15', 2, '2021-12-17', '2021-09-17');
INSERT INTO public.tuser VALUES ('Claudia', '1234', 'Claudia', 'Torres', 'claudia@gmail.com', NULL, NULL, '2022-06-21 11:32:00.100434', true, '1995-04-15', 2, '2021-12-17', '2021-09-17');
INSERT INTO public.tuser VALUES ('Patrii', '1234', 'Patricia', 'Castillo', 'patri@gmail.com', NULL, NULL, '2022-06-21 11:32:43.48183', true, '1997-08-27', 1, '2021-11-17', '2021-10-17');
INSERT INTO public.tuser VALUES ('Raul', '1234', 'Raul', 'Muñoz', 'raul@gmail.com', NULL, NULL, '2022-06-21 11:37:20.491848', true, '1997-08-27', 2, '2022-01-17', '2021-10-17');
INSERT INTO public.tuser VALUES ('Dieguiiiito', '1234', 'Diego', 'Fuentes', 'dieguiito@gmail.com', NULL, NULL, '2022-06-21 11:38:03.614546', true, '1997-08-27', 2, '2022-01-17', '2021-10-17');
INSERT INTO public.tuser VALUES ('monchito', '1234', 'Moncho ', 'holis', 'monchito@gmail.com', NULL, NULL, '2022-06-20 16:53:55.510699', true, '2022-06-20', 3, '2023-06-20', '2022-06-20');
INSERT INTO public.tuser VALUES ('Sandrita', '1234', 'Sandra', 'Lorenzo', 'sandra@gmail.com', NULL, NULL, '2022-06-29 16:38:45.741589', true, '2022-06-29', 2, '2022-09-29', NULL);
INSERT INTO public.tuser VALUES ('julito', '1234', 'julito', 'julito21', 'julito@gmail.com', '', NULL, '2022-05-20 13:12:09.176718', true, '2020-10-02', 3, '2023-02-25', '2022-02-25');
INSERT INTO public.tuser VALUES ('neba', '1234', 'adas', 'asdasd', 'asd@a.com', NULL, NULL, '2022-06-29 16:49:49.839027', true, '2022-06-29', NULL, NULL, NULL);
INSERT INTO public.tuser VALUES ('pedrito', '1234', 'Pedro', 'Matinez', 'pedro@gmail.com', NULL, NULL, '2022-06-29 17:30:05.615985', true, '2022-06-29', NULL, NULL, NULL);
INSERT INTO public.tuser VALUES ('paula92', '1234', 'Paula', 'Matinez', 'paula@gmail.com', NULL, NULL, '2022-06-29 17:31:23.150083', true, '2022-06-29', 2, '2022-09-29', NULL);
INSERT INTO public.tuser VALUES ('Jesus92', '1234', 'Jesus', 'Leiro', 'jesus@gmail.com', NULL, NULL, '2022-06-30 08:55:30.381703', true, '2022-06-30', 2, '2022-09-30', NULL);
INSERT INTO public.tuser VALUES ('sonia92', '1234', 'Sonia', 'Leiro', 'sonia@gmail.com', NULL, NULL, '2022-06-30 09:48:44.992793', true, '2022-06-30', 2, '2022-09-30', NULL);


--
-- TOC entry 3073 (class 0 OID 190150)
-- Dependencies: 207
-- Data for Name: tuser_preference; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.tuser_preference VALUES (0, 'user_preference', 'demo', 'Iw0KI1R1ZSBNYXkgMTYgMTI6NTc6MDYgQ0VTVCAyMDE3DQpkZW1vX2FwcF9zdGF0dXNfYmFyX3Zpc2libGU9eWVzDQpkZW1vX2FkanVzdF90cmVlX3NwYWNlPXRydWUNCmRlbW9fYXBwX3dpbmRvd19zdGF0ZT0wDQpkZW1vX3RhYmxlX2NvbmZfc29ydF9maWx0ZXJfZm9ybUN1c3RvbWVyLnhtbF9DdXN0b21lclNlcnZpY2UuY3VzdG9tZXJfVEVTVD1udWxsO251bGw7U1VSTkFNRVw9OThcOjF8SURcPTc1XDoyfE5BTUVcPTk5XDozfENVU1RPTUVSVFlQRUlEXD0wXDo0fENVU1RPTUVSSURcPTEyNVw6NXxBRERSRVNTXD0xMjNcOjZ8UEhPTkVcPTEyMVw6N3xTVEFSVERBVEVcPTEzNlw6OHxMT05HSVRVREVcPTExNlw6OXxMQVRJVFVERVw9MTEzXDoxMHxFTUFJTFw9MTcwXDoxMnw7QkFTRTY0ck8wQUJYTnlBQk5xWVhaaExuVjBhV3d1U0dGemFIUmhZbXhsRTdzUEpTRks1TGdEQUFKR0FBcHNiMkZrUm1GamRHOXlTUUFKZEdoeVpYTm9iMnhrZUhBL1FBQUFBQUFBQ0hjSUFBQUFDd0FBQUFCNA0KZGVtb190YWJsZV9jb25mX3NvcnRfZmlsdGVyX2NvbmZpZ3VyYXRpb25zX2Zvcm1DdXN0b21lci54bWxfQ3VzdG9tZXJTZXJ2aWNlLmN1c3RvbWVyPVRFU1QNCmRlbW9fdGFibGVfY29udHJvbF9wYW5lbF9mb3JtQWNjb3VudHMtZGV0YWlsLnhtbF9Nb3ZlbWVudFNlcnZpY2UubW92ZW1lbnQ9Z3JvdXB0YWJsZWtleTtkZWZhdWx0Y2hhcnRidXR0b247ZXhjZWxleHBvcnRidXR0b247c3Vtcm93YnV0dG9uO2NhbGN1bGVkY29sc2J1dHRvbjtwcmludGluZ2J1dHRvbjtmaWx0ZXJzYXZlYnV0dG9uO3Zpc2libGVjb2xzYnV0dG9uO2h0bWxleHBvcnRidXR0b247Y29weWJ1dHRvbjtncm91cHRhYmxla2V5O2luc2VydGJ1dHRvbjtyZWZyZXNoYnV0dG9uDQpkZW1vX2Zvcm1CcmFuY2hlcy1kZXRhaWwueG1sPTg4MDs1MDU7LTExNTA7MzY5DQpkZW1vX2RldGFpbF9kaWFsb2dfc2l6ZV9wb3NpdGlvbl9mb3JtQ3VzdG9tZXIueG1sX0N1c3RvbWVyU2VydmljZS5jdXN0b21lcj03NDk7MzUwOy0xOTA1OzM5MQ0KZGVtb19hcHBfdG9vbGJhcl9sb2NhdGlvbj1Ob3J0aA0KZGVtb19hcHBfd2luZG93X3Bvc2l0aW9uPS0xNTgwOzExDQpkZW1vX2FwcF93aW5kb3dfc2l6ZT0xNTg0OzEwNDQNCmRlbW9fZm9ybUVtcGxveWVlcy1kZXRhaWwueG1sPTExMTY7NzM5OzYxMDsxOTUNCmRlbW9fZm9ybUFjY291bnRzLWRldGFpbC54bWw9OTE1OzUwMDstMTE1MDszNjkNCg==');


--
-- TOC entry 3066 (class 0 OID 190102)
-- Dependencies: 200
-- Data for Name: tuser_role; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.tuser_role VALUES (0, 0, 'demo');


--
-- TOC entry 3086 (class 0 OID 191797)
-- Dependencies: 220
-- Data for Name: tuseradmin; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.tuseradmin VALUES ('demo', 'demouser', 'demo', 'demo', NULL, '44460713B', NULL, NULL, NULL, NULL, 1, '2022-07-01', NULL);


--
-- TOC entry 3111 (class 0 OID 0)
-- Dependencies: 221
-- Name: event_users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.event_users_id_seq', 29, true);


--
-- TOC entry 3112 (class 0 OID 0)
-- Dependencies: 227
-- Name: events_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.events_id_seq', 5, true);


--
-- TOC entry 3113 (class 0 OID 0)
-- Dependencies: 215
-- Name: favorite_games_game_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.favorite_games_game_id_seq', 1, true);


--
-- TOC entry 3114 (class 0 OID 0)
-- Dependencies: 217
-- Name: favorite_games_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.favorite_games_id_seq', 135, true);


--
-- TOC entry 3115 (class 0 OID 0)
-- Dependencies: 229
-- Name: games_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.games_id_seq', 29, true);


--
-- TOC entry 3116 (class 0 OID 0)
-- Dependencies: 218
-- Name: subscription_types_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.subscription_types_id_seq', 4, true);


--
-- TOC entry 3117 (class 0 OID 0)
-- Dependencies: 208
-- Name: ti18n_id_i18n_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.ti18n_id_i18n_seq', 1, false);


--
-- TOC entry 3118 (class 0 OID 0)
-- Dependencies: 210
-- Name: ti18n_value_id_i18n_value_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.ti18n_value_id_i18n_value_seq', 34, false);


--
-- TOC entry 3119 (class 0 OID 0)
-- Dependencies: 223
-- Name: tour_users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.tour_users_id_seq', 51, true);


--
-- TOC entry 3120 (class 0 OID 0)
-- Dependencies: 225
-- Name: tournaments_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.tournaments_id_seq', 9, true);


--
-- TOC entry 3121 (class 0 OID 0)
-- Dependencies: 197
-- Name: trole_id_rolename_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.trole_id_rolename_seq', 1, false);


--
-- TOC entry 3122 (class 0 OID 0)
-- Dependencies: 212
-- Name: trole_server_permission_id_role_server_permission_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.trole_server_permission_id_role_server_permission_seq', 1, false);


--
-- TOC entry 3123 (class 0 OID 0)
-- Dependencies: 201
-- Name: tserver_permission_id_server_permission_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.tserver_permission_id_server_permission_seq', 1, false);


--
-- TOC entry 3124 (class 0 OID 0)
-- Dependencies: 204
-- Name: tsetting_id_setting_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.tsetting_id_setting_seq', 8, false);


--
-- TOC entry 3125 (class 0 OID 0)
-- Dependencies: 206
-- Name: tuser_preference_id_user_preference_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.tuser_preference_id_user_preference_seq', 1, false);


--
-- TOC entry 3126 (class 0 OID 0)
-- Dependencies: 199
-- Name: tuser_role_id_user_role_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.tuser_role_id_user_role_seq', 1, false);


--
-- TOC entry 2922 (class 2606 OID 192117)
-- Name: event_users event_users_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.event_users
    ADD CONSTRAINT event_users_pkey PRIMARY KEY (id);


--
-- TOC entry 2928 (class 2606 OID 192141)
-- Name: events events_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.events
    ADD CONSTRAINT events_pkey PRIMARY KEY (id);


--
-- TOC entry 2916 (class 2606 OID 191012)
-- Name: favorite_games favorite_games_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.favorite_games
    ADD CONSTRAINT favorite_games_pkey PRIMARY KEY (id);


--
-- TOC entry 2914 (class 2606 OID 190896)
-- Name: games games_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.games
    ADD CONSTRAINT games_pkey PRIMARY KEY (id);


--
-- TOC entry 2918 (class 2606 OID 191201)
-- Name: subscription_types subscription_types_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.subscription_types
    ADD CONSTRAINT subscription_types_pkey PRIMARY KEY (id);


--
-- TOC entry 2908 (class 2606 OID 190165)
-- Name: ti18n ti18n_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.ti18n
    ADD CONSTRAINT ti18n_pkey PRIMARY KEY (id_i18n);


--
-- TOC entry 2910 (class 2606 OID 190176)
-- Name: ti18n_value ti18n_value_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.ti18n_value
    ADD CONSTRAINT ti18n_value_pkey PRIMARY KEY (id_i18n_value);


--
-- TOC entry 2924 (class 2606 OID 192125)
-- Name: tour_users tour_users_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.tour_users
    ADD CONSTRAINT tour_users_pkey PRIMARY KEY (id);


--
-- TOC entry 2926 (class 2606 OID 192133)
-- Name: tournaments tournaments_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.tournaments
    ADD CONSTRAINT tournaments_pkey PRIMARY KEY (id);


--
-- TOC entry 2902 (class 2606 OID 190136)
-- Name: trequest_statistics trequest_statistics_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.trequest_statistics
    ADD CONSTRAINT trequest_statistics_pkey PRIMARY KEY (id_request_statistics);


--
-- TOC entry 2896 (class 2606 OID 190098)
-- Name: trole trole_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.trole
    ADD CONSTRAINT trole_pkey PRIMARY KEY (id_rolename);


--
-- TOC entry 2912 (class 2606 OID 190184)
-- Name: trole_server_permission trole_server_permission_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.trole_server_permission
    ADD CONSTRAINT trole_server_permission_pkey PRIMARY KEY (id_role_server_permission);


--
-- TOC entry 2900 (class 2606 OID 190127)
-- Name: tserver_permission tserver_permission_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.tserver_permission
    ADD CONSTRAINT tserver_permission_pkey PRIMARY KEY (id_server_permission);


--
-- TOC entry 2904 (class 2606 OID 190146)
-- Name: tsetting tsetting_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.tsetting
    ADD CONSTRAINT tsetting_pkey PRIMARY KEY (id_setting);


--
-- TOC entry 2894 (class 2606 OID 190088)
-- Name: tuser tuser_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.tuser
    ADD CONSTRAINT tuser_pkey PRIMARY KEY (user_);


--
-- TOC entry 2906 (class 2606 OID 190157)
-- Name: tuser_preference tuser_preference_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.tuser_preference
    ADD CONSTRAINT tuser_preference_pkey PRIMARY KEY (id_user_preference);


--
-- TOC entry 2898 (class 2606 OID 190106)
-- Name: tuser_role tuser_role_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.tuser_role
    ADD CONSTRAINT tuser_role_pkey PRIMARY KEY (id_user_role);


--
-- TOC entry 2920 (class 2606 OID 191803)
-- Name: tuseradmin tuseradmin_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.tuseradmin
    ADD CONSTRAINT tuseradmin_pkey PRIMARY KEY (user_);


--
-- TOC entry 2938 (class 2606 OID 192162)
-- Name: event_users event_users_event_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.event_users
    ADD CONSTRAINT event_users_event_id_fkey FOREIGN KEY (event_id) REFERENCES public.events(id);


--
-- TOC entry 2937 (class 2606 OID 192142)
-- Name: event_users event_users_user_name_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.event_users
    ADD CONSTRAINT event_users_user_name_fkey FOREIGN KEY (user_name) REFERENCES public.tuser(user_);


--
-- TOC entry 2934 (class 2606 OID 190924)
-- Name: favorite_games favorite_games_game_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.favorite_games
    ADD CONSTRAINT favorite_games_game_id_fkey FOREIGN KEY (game_id) REFERENCES public.games(id) ON DELETE CASCADE;


--
-- TOC entry 2935 (class 2606 OID 190929)
-- Name: favorite_games favorite_games_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.favorite_games
    ADD CONSTRAINT favorite_games_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.tuser(user_) ON DELETE CASCADE;


--
-- TOC entry 2931 (class 2606 OID 190112)
-- Name: tuser_role fk_trole; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.tuser_role
    ADD CONSTRAINT fk_trole FOREIGN KEY (id_rolename) REFERENCES public.trole(id_rolename);


--
-- TOC entry 2932 (class 2606 OID 190185)
-- Name: trole_server_permission fk_trole_server_permission; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.trole_server_permission
    ADD CONSTRAINT fk_trole_server_permission FOREIGN KEY (id_rolename) REFERENCES public.trole(id_rolename);


--
-- TOC entry 2933 (class 2606 OID 190190)
-- Name: trole_server_permission fk_tserver_permission; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.trole_server_permission
    ADD CONSTRAINT fk_tserver_permission FOREIGN KEY (id_server_permission) REFERENCES public.tserver_permission(id_server_permission);


--
-- TOC entry 2930 (class 2606 OID 190107)
-- Name: tuser_role fk_tuser; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.tuser_role
    ADD CONSTRAINT fk_tuser FOREIGN KEY (user_) REFERENCES public.tuser(user_);


--
-- TOC entry 2940 (class 2606 OID 192157)
-- Name: tour_users tour_users_tour_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.tour_users
    ADD CONSTRAINT tour_users_tour_id_fkey FOREIGN KEY (tour_id) REFERENCES public.tournaments(id);


--
-- TOC entry 2939 (class 2606 OID 192152)
-- Name: tour_users tour_users_user_name_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.tour_users
    ADD CONSTRAINT tour_users_user_name_fkey FOREIGN KEY (user_name) REFERENCES public.tuser(user_);


--
-- TOC entry 2929 (class 2606 OID 191202)
-- Name: tuser tuser_sub_type_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.tuser
    ADD CONSTRAINT tuser_sub_type_fkey FOREIGN KEY (sub_id) REFERENCES public.subscription_types(id);


--
-- TOC entry 2936 (class 2606 OID 191804)
-- Name: tuseradmin tuseradmin_sub_type_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.tuseradmin
    ADD CONSTRAINT tuseradmin_sub_type_fkey FOREIGN KEY (sub_id) REFERENCES public.subscription_types(id);


-- Completed on 2023-02-02 15:30:02

--
-- PostgreSQL database dump complete
--

