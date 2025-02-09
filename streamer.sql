PGDMP  :    +                |         	   vstreamer    16.2    16.2     �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false                        0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false                       0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false                       1262    24617 	   vstreamer    DATABASE     �   CREATE DATABASE vstreamer WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'English_United States.1252';
    DROP DATABASE vstreamer;
                postgres    false            �            1255    24702    generate_random_id(integer)    FUNCTION     �  CREATE FUNCTION public.generate_random_id(length integer DEFAULT 8) RETURNS text
    LANGUAGE plpgsql
    AS $$
DECLARE
    chars TEXT := 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    result TEXT := '';
    i INT;
BEGIN
    FOR i IN 1..length LOOP
        result := result || substr(chars, floor(random() * length(chars) + 1)::int, 1);
    END LOOP;
    RETURN result;
END;
$$;
 9   DROP FUNCTION public.generate_random_id(length integer);
       public          postgres    false            �            1259    24703    films    TABLE     W  CREATE TABLE public.films (
    rand_id text DEFAULT public.generate_random_id(12) NOT NULL,
    title character varying,
    company character varying,
    release date,
    url text,
    thumbnail text,
    images text[],
    genre character varying[],
    actors character varying[],
    director character varying,
    description text
);
    DROP TABLE public.films;
       public         heap    postgres    false    220            �            1259    24711    genres    TABLE     �   CREATE TABLE public.genres (
    rand_id character varying(12) DEFAULT public.generate_random_id(12) NOT NULL,
    genre character varying(255)
);
    DROP TABLE public.genres;
       public         heap    postgres    false    220            �            1259    24717    reviews    TABLE     �   CREATE TABLE public.reviews (
    rand_id text DEFAULT public.generate_random_id(12) NOT NULL,
    movie_id text,
    "user" character varying,
    rating integer,
    review text,
    date timestamp without time zone
);
    DROP TABLE public.reviews;
       public         heap    postgres    false    220            �            1259    24668    users    TABLE     �   CREATE TABLE public.users (
    username character varying,
    email character varying,
    password character varying,
    rand_id bigint NOT NULL
);
    DROP TABLE public.users;
       public         heap    postgres    false            �            1259    24676    users_rand_id_seq    SEQUENCE     z   CREATE SEQUENCE public.users_rand_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public.users_rand_id_seq;
       public          postgres    false    215                       0    0    users_rand_id_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public.users_rand_id_seq OWNED BY public.users.rand_id;
          public          postgres    false    216            ]           2604    24677    users rand_id    DEFAULT     n   ALTER TABLE ONLY public.users ALTER COLUMN rand_id SET DEFAULT nextval('public.users_rand_id_seq'::regclass);
 <   ALTER TABLE public.users ALTER COLUMN rand_id DROP DEFAULT;
       public          postgres    false    216    215            �          0    24703    films 
   TABLE DATA              COPY public.films (rand_id, title, company, release, url, thumbnail, images, genre, actors, director, description) FROM stdin;
    public          postgres    false    217   �       �          0    24711    genres 
   TABLE DATA           0   COPY public.genres (rand_id, genre) FROM stdin;
    public          postgres    false    218   �       �          0    24717    reviews 
   TABLE DATA           R   COPY public.reviews (rand_id, movie_id, "user", rating, review, date) FROM stdin;
    public          postgres    false    219   F!       �          0    24668    users 
   TABLE DATA           C   COPY public.users (username, email, password, rand_id) FROM stdin;
    public          postgres    false    215   )"                  0    0    users_rand_id_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public.users_rand_id_seq', 5, true);
          public          postgres    false    216            d           2606    24710    films Films_pkey 
   CONSTRAINT     U   ALTER TABLE ONLY public.films
    ADD CONSTRAINT "Films_pkey" PRIMARY KEY (rand_id);
 <   ALTER TABLE ONLY public.films DROP CONSTRAINT "Films_pkey";
       public            postgres    false    217            f           2606    24716    genres genres_pkey 
   CONSTRAINT     U   ALTER TABLE ONLY public.genres
    ADD CONSTRAINT genres_pkey PRIMARY KEY (rand_id);
 <   ALTER TABLE ONLY public.genres DROP CONSTRAINT genres_pkey;
       public            postgres    false    218            h           2606    24724    reviews reviews_pkey 
   CONSTRAINT     W   ALTER TABLE ONLY public.reviews
    ADD CONSTRAINT reviews_pkey PRIMARY KEY (rand_id);
 >   ALTER TABLE ONLY public.reviews DROP CONSTRAINT reviews_pkey;
       public            postgres    false    219            b           2606    24684    users users_pkey 
   CONSTRAINT     S   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (rand_id);
 :   ALTER TABLE ONLY public.users DROP CONSTRAINT users_pkey;
       public            postgres    false    215            �   �  x��X�n�8}v����/�]���8�~����(��hK����(�������xfѝYl��b�ĉ��aQ<簊�˯���#Ͻ�G'T�ܨ��В�&��d�jUeBפnT)FT�1Ӫ�OG�m���3ʚ���aY<7�feV��ȼ�ds�l��\d¼S�	 � 㘡kW�,ooio�a�{��R<^��E���"5+U����Ta=+x�bہl��X���U�(��O�m.�t��g؎�yE+�]o@�
~�w?�b�������^���F�v�.�gOٽ{;.��m8���)�8VA���w��I㫳�?G�?)���'+F���'�U�|�|5:̴�ɡ��"n�}�F���(�^Pm������c�e��7��hC`7��N>S͇���\�F�f+�ޖ�"OT�Q��&9`Bk+j�E �a���2�(q#Yi�>!M%�D��ת�s��ld��L���������5՞;Z������VШ��U��a�oؑa/He������q��`��2+�9S[�vVA�$���;<�s(��E�`\��?�xS'|�j���o���;��/L�Ϧ
��O2�>��E�����2��]|�l�s9[���+��d!Sp��b�Oni^e��*��w�/�/h��"3�3U@�%Ւ�CC"B��O���uF�]�Z���ҫ�zP-ȬS��dj <���c�JP�F��Z�d�Wh�,k5��$n�
Э\8�+Ht+OF�Z��4��u#U9�O@5� ���*� �2�QML�u%5e�V�
���i���
��Tb�Rk���X9m���ϳi��i4��$�Y/a�'�D�z@���Q��a{�����K'4k�ӂɒԔ�Z��&^2�.\;��vcv���
�d�G�3D�s���؈���p2	�$�	�6y@�_�0����g!����ǉ/b7��A�'n�x0t:���x(l�b?��p�ХQ8����@�T����Q��F����x|��w݉?�^Z�Ü��Y��"�t?���}wU���/������ܱm{�/��/���U�b̍�`��6ӯjlW_�@���k3 0��i�[��9N���L���a"�g
&���$B�N���))�����"8v�F�݃��&1S1��\I���fT.D�4����Y�P�j���6 ���XR���,�"G9pt� A�e�˔����xR�A��X)�fa�3Y=�dO���*J��dSÐDA95�<	���h��ZP�#s<������[[��n�6WmM����kĴ���v=`w�"���'�g �����ƴ)&N�^B��p#r��C���5`�S�M)2-A������?�����0����h�.�U�{::�<D��qj8���щ>�� �8��o��������c⣰�l������`�9����6��9��U�MA���R���ʟ�g7�Yr����P��hOc�0Cy�P�N��J�fn���B�G�fm�a脎ńq��ѱ�'�ɏ��l�7tV���ry�^��E�M���E��Eo���?|�_��� ���A�?]���w�/iӐ[%j=�<n�
ji��IdԯX 6[X�x%�1�� ���8�h5Gf唂f1��XuBE��g.(G��-<��1�1���8�·\m@ՕCiK*����0M���k��-�\(=4��֧��Jt�BBև�RP�Q �������(����p�p�8�s�	TWg�z�ݷoV�/|�ڨ=�Z�%f,�8�0K�X��`�c�x��2n	��v�؎���A�$��ЍB�&J�Qڎ��x�Л���P�=�&fU��co��@W}�5�d�|,������d�zo�r��y #ϼ�mg��6���|tغ=:�DߪT��KN�^`k3��(A�=W��X6c��W&�G�"�Vr܍��0�����Jc�p@;\/���$Z
ĮEC�	B�#K��R�Ch>\�l�8�ײ��
��0�~6���~��e      �   �  x�%��v�0���?E�`Vd��K-*���D!6!4>}�����i����54��ܬ᪄nZw���:!��Ҳ1����G���0rK.��6��x����b�T� �R��	L��͕��WT�I5��
�5��!ɏ��ٯ-�Uf��F� R�'Ǜ-͊\���$Йpf�����%Z�� �f�zDK9a��Fo=�������1�S��B�������6�Ɋ
xݨ�'�/N����JP��V�xK+�\L猶���9an�1���_D�����=�
��uC�@��n������$)3
�WF���뾪'(�8�˒���>����x�KUJ7�
�1�����ͅ�$n��z���ޡ�h�, e�<��J�%|��l5�o      �   �   x�}��n�@E��|?�9��}k���m/	/30 P��WI41i������Nꕵ��	��4]�|آ�2�A#�̾�C�5��E�A��2��۝e^ulൈ!p�.��)�[��Tz�����v~�w���8~,�D�A5S��5G~ҍo`��ڸD������Q�s*۫�m�&,�����@3g���%�Lz�YW6B~MY�      �   �   x�e���   �3<�g�`��is���\�JC�؜���{�|®�b�V,����0�n���[�s�����4�u0KQ���ʫ�w��S��Eg�'�d�1,� �_��%���B�2(�~�ڠ��4q��fҍ�tڵi��ŏ\��W!�K$43     