--
-- PostgreSQL database dump
--

-- Dumped from database version 14.6
-- Dumped by pg_dump version 14.5 (Ubuntu 14.5-0ubuntu0.22.04.1)

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
-- Name: public; Type: SCHEMA; Schema: -; Owner: -
--

CREATE SCHEMA public;


--
-- Name: SCHEMA public; Type: COMMENT; Schema: -; Owner: -
--

COMMENT ON SCHEMA public IS 'standard public schema';


SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: urls; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.urls (
    id integer NOT NULL,
    url text NOT NULL,
    "shortUrl" text NOT NULL,
    "visitCount" integer DEFAULT 0 NOT NULL,
    "userId" integer NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL
);


--
-- Name: urls_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.urls_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: urls_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.urls_id_seq OWNED BY public.urls.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.users (
    id integer NOT NULL,
    name character varying(30) NOT NULL,
    email text NOT NULL,
    password text NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL
);


--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: urls id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.urls ALTER COLUMN id SET DEFAULT nextval('public.urls_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Data for Name: urls; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.urls VALUES (3, 'https://www.youtube.com/', 'W84JOY8g', 3, 1, '2022-12-23 05:16:05.189454');
INSERT INTO public.urls VALUES (4, 'https://www.aliexpress.com/', '5lxcZcCL', 2, 1, '2022-12-23 05:16:41.820777');
INSERT INTO public.urls VALUES (5, 'https://www.pelando.com.br/', 'Nk9q_4UV', 1, 1, '2022-12-23 05:16:54.749949');
INSERT INTO public.urls VALUES (12, 'https://www.google.com.br/', 'goAnZNoB', 1, 3, '2022-12-23 05:22:23.295807');
INSERT INTO public.urls VALUES (13, 'https://www.netflix.com/browse', 'VwjQH0uy', 1, 3, '2022-12-23 05:22:39.036522');
INSERT INTO public.urls VALUES (11, 'https://web.whatsapp.com/', '4ffOl8jt', 1, 3, '2022-12-23 05:22:05.042626');
INSERT INTO public.urls VALUES (8, 'https://www.notion.so', 'R7XuANIK', 1, 3, '2022-12-23 05:20:21.746531');
INSERT INTO public.urls VALUES (9, 'https://web.telegram.org/k/', 'inKj4s7h', 1, 3, '2022-12-23 05:20:43.350822');
INSERT INTO public.urls VALUES (10, 'https://github.com/', 'cuQcvdij', 1, 3, '2022-12-23 05:21:50.648048');
INSERT INTO public.urls VALUES (1, 'https://twitter.com/home', 'jYgUqwk-', 3, 5, '2022-12-23 05:15:14.764361');
INSERT INTO public.urls VALUES (7, 'https://mail.google.com/mail/u/0/#inbox', 'kENNDyrz', 3, 5, '2022-12-23 05:18:19.919101');
INSERT INTO public.urls VALUES (2, 'https://www.youtube.com/', 'lsBY_WUA', 3, 5, '2022-12-23 05:15:46.411034');
INSERT INTO public.urls VALUES (6, 'https://www.facebook.com/', 'kaGnuhcI', 14, 2, '2022-12-23 05:17:36.903725');
INSERT INTO public.urls VALUES (14, 'https://outlook.live.com/', 'nhuZI6zo', 0, 4, '2022-12-23 05:44:55.833303');


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.users VALUES (1, 'Hugo Ignacio', 'hugo@hugo.com', '$2b$10$EcXnKXK.FuQWB7IMEaewh.ycUaJz1fKmYBBBPL7iezEVEGYAi9SOS', '2022-12-23 04:45:49.242491');
INSERT INTO public.users VALUES (2, 'Hugo Andrade', 'hugo@gmail.com', '$2b$10$5Z.ODoxbdkOPCy18FaK3duSDFqmR6Es.eL6eW5UafJ2IBxGoy.uUS', '2022-12-23 04:46:01.984228');
INSERT INTO public.users VALUES (3, 'Hugo Silva', 'hugo@hotmail.com', '$2b$10$ugya4PBa/H5jnpHLv4Xhuen6PowwmVit2bA7vXRa0yIkAmUfsPq32', '2022-12-23 04:46:11.560881');
INSERT INTO public.users VALUES (4, 'Hugo Andrade Silva', 'hugo@live.com', '$2b$10$YldNAQPVnnKluTuJp92o9.xuM3oX4lpnJQNcjbYqW.WsbnTrJ5DbC', '2022-12-23 04:46:50.553329');
INSERT INTO public.users VALUES (5, 'Hugo Silva Ignacio', 'hugo@outlook.com', '$2b$10$rljIMMHA0DDHfFIgvUY0Nefpyph69VLS9gx82wf9f7xEzEJkDy6Iy', '2022-12-23 04:47:07.064744');
INSERT INTO public.users VALUES (6, 'Hugo Andrade Silva Ignacio', 'hugo@ignacio.com', '$2b$10$HVglXG5JRjeQJyDb4/oJgO0FUkeAfOcJamUNRtw.CCzIgcy6HZzTe', '2022-12-23 04:47:32.498032');


--
-- Name: urls_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.urls_id_seq', 14, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.users_id_seq', 6, true);


--
-- Name: urls urls_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.urls
    ADD CONSTRAINT urls_pkey PRIMARY KEY (id);


--
-- Name: urls urls_shortUrl_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.urls
    ADD CONSTRAINT "urls_shortUrl_key" UNIQUE ("shortUrl");


--
-- Name: users users_email_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: urls urls_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.urls
    ADD CONSTRAINT "urls_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id);


--
-- Name: SCHEMA public; Type: ACL; Schema: -; Owner: -
--

REVOKE ALL ON SCHEMA public FROM postgres;
REVOKE ALL ON SCHEMA public FROM PUBLIC;
GRANT ALL ON SCHEMA public TO hugoignacio;
GRANT ALL ON SCHEMA public TO PUBLIC;


--
-- PostgreSQL database dump complete
--

