INSERT INTO albums (ALBUM_YEAR, TITLE, ARTIST, GENRE, SUBGENRE, IMAGE) VALUES
(1967, 'Sgt. Pepper''s Lonely Hearts Club Band', 'The Beatles', 'Rock', 'Psychedelic Rock', 'https://upload.wikimedia.org/wikipedia/en/7/74/Sgt._Pepper%27s_Lonely_Hearts_Club_Band.jpg'),
(1973, 'The Dark Side of the Moon', 'Pink Floyd', 'Rock', 'Progressive Rock', 'https://upload.wikimedia.org/wikipedia/en/3/3b/Dark_Side_of_the_Moon.png'),
(1982, 'Thriller', 'Michael Jackson', 'Pop', 'Funk, Post-disco, Dance-pop', 'https://upload.wikimedia.org/wikipedia/en/5/55/Michael_Jackson_-_Thriller.png'),
(1991, 'Nevermind', 'Nirvana', 'Rock', 'Grunge', 'https://upload.wikimedia/en/b/b7/NirvanaNevermindalbumcover.jpg'),
(2000, 'Kid A', 'Radiohead', 'Alternative Rock', 'Electronic, Experimental Rock', 'https://upload.wikimedia/en/a/a1/RadioheadKidA.jpg');

INSERT INTO users(FIRST_NAME, LAST_NAME, USER_NAME, USER_PASSWORD, ADMIN) VALUES ('John', 'Doe', 'johndoe', 'password123', 0),
('Jane', 'Smith', 'janesmith', 'password456', 0),
('Admin', 'User', 'adminuser', 'adminpassword', 1);