CREATE TYPE cat AS ENUM (
  'tech',
  'history',
  'music',
  'writing',
  'misc'
);


CREATE TABLE IF NOT EXISTS posts (
  post_id SERIAL NOT NULL,
  post_category cat NOT NULL,
  post_title VARCHAR(100) NOT NULL,
  post_date DATE NOT NULL,
  post_text TEXT NOT NULL,

  PRIMARY KEY (post_id)
);

INSERT INTO posts(post_category, post_title, post_date, post_text) VALUES('misc','TEST', CURRENT_DATE, 'Lorem ipsum dolor sit amet,   consectetur adipiscing elit. Aenean laoreet mauris elit, non gravida elit ultricies non.   Sed tincidunt magna sed ligula semper tincidunt. Proin at ultrices metus, vitae   sodales est. Donec sollicitudin rutrum tristique. Orci varius natoque penatibus   et magnis dis parturient montes, nascetur ridiculus mus. Nulla pellentesque condimentum   dolor, ac porta est egestas et. Donec vitae sapien maximus nisl sodales mollis.   Vestibulum et sem nisi. Class aptent taciti sociosqu ad litora torquent per   conubia nostra, per inceptos himenaeos. Sed eu lectus mattis, congue turpis et,   placerat neque. Nam ac ipsum nibh.  Sed sit amet felis ante. Duis volutpat augue   et lectus posuere, ac aliquet nunc hendrerit. Proin eleifend ultrices eros nec   finibus. Curabitur massa neque, vulputate non purus non, placerat tincidunt quam.   Vestibulum ac scelerisque lorem, ut iaculis nibh. Mauris fringilla, erat sed maximus mollis,   purus quam blandit dolor, sit amet volutpat libero magna nec metus. Nunc nibh   lectus, dignissim ut lacus in, hendrerit fermentum ante. Suspendisse a est sed   sapien fringilla commodo non in libero. Maecenas facilisis, lacus ut lobortis   semper, augue neque vestibulum justo, et aliquam mauris libero id eros. Aenean   vestibulum nulla quis neque lobortis volutpat. Quisque tincidunt congue lectus,   cursus vulputate erat pulvinar at. Aliquam purus dolor, laoreet sed sollicitudin in,   efficitur eu elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra,   per inceptos himenaeos. Sed id eleifend mauris, ut aliquam metus.  Mauris tempor   et sem non pellentesque. Vivamus tristique felis nulla, id blandit felis   hendrerit quis. Vestibulum quis blandit tellus, sit amet gravida justo.   Vivamus a mollis enim. Nulla lobortis sodales nulla, ac porttitor nulla tempor   eget. Aliquam laoreet nulla sit amet leo venenatis ornare. Maecenas vel maximus   justo. Aliquam nec feugiat diam, et pretium metus. Nunc consequat cursus dolor,   a sodales orci lacinia at. Nulla at ex ac elit sodales rutrum. Nam nec risus   id augue pharetra efficitur auctor ut ipsum. Praesent sed tellus ultrices   ligula aliquam accumsan non sit amet mi. Donec gravida nunc vel sem semper   elementum. Aliquam euismod massa eget lectus semper pharetra. In hac habitasse   platea dictumst.  Phasellus malesuada turpis sem. Vivamus dui ligula, fringilla   at consectetur sit amet, gravida eu ex. Aliquam porttitor sed mi non sodales.   Sed rhoncus ipsum sed nibh convallis consectetur. In dictum turpis quis diam   lacinia viverra. Maecenas non felis at purus sodales sodales aliquam et leo.   Quisque a consectetur diam. Proin vitae faucibus augue, non posuere orci.   Aliquam sit amet eleifend mi. Vestibulum pharetra dolor ut velit semper rhoncus.   Praesent dictum ut justo sit amet bibendum. Nullam sapien leo, convallis vel   nisi at, accumsan molestie lectus. Nunc gravida odio id fermentum lobortis.');
