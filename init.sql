CREATE DATABASE navbar1212 COLLATE LATIN1_GENERAL_100_CI_AS_SC_UTF8
GO

USE navbar1212
GO

create table contents
(
    id bigint identity not null,
    content_text varchar(8000),
    created_at datetime2,
    name varchar(255),
    published bit not null,
    updated_at datetime2,
    primary key (id)
)
GO

create table navbars
(
    id bigint identity not null,
    name varchar(255),
    primary key (id)
)
GO

create table navitems
(
    id bigint identity not null,
    link varchar(255),
    linked bit not null,
    name varchar(255),
    parent int not null,
    published bit not null,
    sort int not null,
    navbar_id bigint not null,
    primary key (id)
)
GO

alter table navitems 
    add constraint FKiv15kwgxruk3iheb14dq7sxxf 
    foreign key (navbar_id) 
    references navbars
GO

INSERT INTO contents
    (content_text, created_at, name, published, updated_at)
VALUES
    ('<p><img src="https://www.statisticaid.net/wp-content/uploads/61webop-Statistik-statistics-Nachilfe-Tutor-Hilfe-help-aid-Problem-Unterst%C3%BCtzung-Statistiknachhilfe-Innsbruck-Student-Seminararbeit-Masterarbeit-Diplomarbeit-Dissertation.png" alt="" width="542" height="227" /></p>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et justo nec ante faucibus euismod. Sed tempus tellus id magna blandit, eu interdum sapien mattis. Nullam nec sapien dui. Integer in ornare lorem, laoreet commodo nulla. Ut consequat diam ultrices dui elementum blandit. Suspendisse magna urna, ornare ut eros eu, porttitor fringilla mauris. Duis pulvinar, turpis ut pulvinar rutrum, nisl risus viverra nunc, eget consequat mi neque id magna.</p>
<p>Pellentesque ultricies sem dui, eget consectetur libero convallis at. Pellentesque ullamcorper risus non sollicitudin gravida. In ac enim diam. Duis neque ante, faucibus eget tincidunt ut, aliquet nec ex. Proin commodo nulla placerat nisi vestibulum, vitae commodo velit fringilla. Morbi tincidunt facilisis massa sit amet blandit. Vestibulum at ipsum laoreet, iaculis mi sit amet, imperdiet lectus. Vivamus vehicula, lacus quis luctus varius, velit elit varius tellus, quis ultricies felis ex vel dui. Cras eget risus cursus, sodales diam eu, tempor lectus. Maecenas consequat ultrices leo. Nullam luctus et ante in commodo. Morbi mattis, neque sed dictum elementum, justo nisi congue ex, ut ultrices dui felis eu quam. Praesent pulvinar magna vel mi condimentum, et consequat neque pellentesque. Mauris lacinia, sapien at feugiat placerat, massa tellus luctus massa, eu cursus lectus massa sed arcu. Praesent pharetra est at erat convallis ultrices. Pellentesque dignissim interdum dolor at eleifend.</p>
<p>Vivamus non bibendum sapien. Aenean ac ante dignissim, aliquet erat ac, posuere nibh. Integer dapibus mi vitae sapien commodo malesuada. Suspendisse sed tellus sem. Vivamus vel nunc accumsan, laoreet tellus at, sagittis tellus. Phasellus euismod et ipsum nec hendrerit. Nam ultrices nunc at volutpat scelerisque. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque enim libero, placerat et mi id, facilisis sollicitudin arcu.</p>
<p>Integer maximus ex id ante interdum tempus. Sed mollis finibus facilisis. Suspendisse dolor mauris, ullamcorper vel magna non, auctor pretium mauris. Donec nisl nisi, ullamcorper id orci eu, tincidunt convallis quam. Nunc enim elit, hendrerit ut ornare eu, tincidunt a nibh. Donec a magna eget risus sagittis finibus. Integer malesuada dictum lorem vitae imperdiet. Mauris sit amet interdum orci, eu tincidunt eros. Cras pellentesque risus diam. Ut non augue vitae tortor venenatis vehicula vel vitae ligula. Morbi molestie ante sit amet ante vehicula mattis. Vestibulum gravida tempor vulputate.</p>
<p>Curabitur efficitur semper ligula vitae suscipit. Quisque odio nibh, interdum et enim vel, efficitur cursus odio. Ut euismod sit amet nibh a vestibulum. Sed at volutpat nibh, a lobortis augue. Sed tempor orci tempor, pharetra dolor at, porttitor tellus. Fusce nec iaculis augue. Proin dapibus ante eu justo condimentum convallis. Nam vel felis nec ligula condimentum molestie. Phasellus posuere in eros nec aliquam. Nulla id eros luctus, egestas elit quis, vehicula eros. Fusce dapibus euismod metus et vulputate. Maecenas tincidunt arcu a ipsum vehicula vulputate.</p>',
    GETDATE(), 'Бидний тухай', 1, GETDATE()),
    ('<p><img src="https://cefor.no/globalassets/images/statistics/statistics2.jpg" alt="" width="550" height="308" /></p>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et justo nec ante faucibus euismod. Sed tempus tellus id magna blandit, eu interdum sapien mattis. Nullam nec sapien dui. Integer in ornare lorem, laoreet commodo nulla. Ut consequat diam ultrices dui elementum blandit. Suspendisse magna urna, ornare ut eros eu, porttitor fringilla mauris. Duis pulvinar, turpis ut pulvinar rutrum, nisl risus viverra nunc, eget consequat mi neque id magna.</p>
<p>Pellentesque ultricies sem dui, eget consectetur libero convallis at. Pellentesque ullamcorper risus non sollicitudin gravida. In ac enim diam. Duis neque ante, faucibus eget tincidunt ut, aliquet nec ex. Proin commodo nulla placerat nisi vestibulum, vitae commodo velit fringilla. Morbi tincidunt facilisis massa sit amet blandit. Vestibulum at ipsum laoreet, iaculis mi sit amet, imperdiet lectus. Vivamus vehicula, lacus quis luctus varius, velit elit varius tellus, quis ultricies felis ex vel dui. Cras eget risus cursus, sodales diam eu, tempor lectus. Maecenas consequat ultrices leo. Nullam luctus et ante in commodo. Morbi mattis, neque sed dictum elementum, justo nisi congue ex, ut ultrices dui felis eu quam. Praesent pulvinar magna vel mi condimentum, et consequat neque pellentesque. Mauris lacinia, sapien at feugiat placerat, massa tellus luctus massa, eu cursus lectus massa sed arcu. Praesent pharetra est at erat convallis ultrices. Pellentesque dignissim interdum dolor at eleifend.</p>
<p>Vivamus non bibendum sapien. Aenean ac ante dignissim, aliquet erat ac, posuere nibh. Integer dapibus mi vitae sapien commodo malesuada. Suspendisse sed tellus sem. Vivamus vel nunc accumsan, laoreet tellus at, sagittis tellus. Phasellus euismod et ipsum nec hendrerit. Nam ultrices nunc at volutpat scelerisque. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque enim libero, placerat et mi id, facilisis sollicitudin arcu.</p>
<p>Integer maximus ex id ante interdum tempus. Sed mollis finibus facilisis. Suspendisse dolor mauris, ullamcorper vel magna non, auctor pretium mauris. Donec nisl nisi, ullamcorper id orci eu, tincidunt convallis quam. Nunc enim elit, hendrerit ut ornare eu, tincidunt a nibh. Donec a magna eget risus sagittis finibus. Integer malesuada dictum lorem vitae imperdiet. Mauris sit amet interdum orci, eu tincidunt eros. Cras pellentesque risus diam. Ut non augue vitae tortor venenatis vehicula vel vitae ligula. Morbi molestie ante sit amet ante vehicula mattis. Vestibulum gravida tempor vulputate.</p>
<p>Curabitur efficitur semper ligula vitae suscipit. Quisque odio nibh, interdum et enim vel, efficitur cursus odio. Ut euismod sit amet nibh a vestibulum. Sed at volutpat nibh, a lobortis augue. Sed tempor orci tempor, pharetra dolor at, porttitor tellus. Fusce nec iaculis augue. Proin dapibus ante eu justo condimentum convallis. Nam vel felis nec ligula condimentum molestie. Phasellus posuere in eros nec aliquam. Nulla id eros luctus, egestas elit quis, vehicula eros. Fusce dapibus euismod metus et vulputate. Maecenas tincidunt arcu a ipsum vehicula vulputate.</p>',
    GETDATE(), 'Танилцуулга', 1, GETDATE()),
    ('<p><img src="https://www.dpma.de/images/istock/46-50/istock-494497554_goir_gross.jpg" alt="" width="810" height="300" /></p>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et justo nec ante faucibus euismod. Sed tempus tellus id magna blandit, eu interdum sapien mattis. Nullam nec sapien dui. Integer in ornare lorem, laoreet commodo nulla. Ut consequat diam ultrices dui elementum blandit. Suspendisse magna urna, ornare ut eros eu, porttitor fringilla mauris. Duis pulvinar, turpis ut pulvinar rutrum, nisl risus viverra nunc, eget consequat mi neque id magna.</p>
<p>Pellentesque ultricies sem dui, eget consectetur libero convallis at. Pellentesque ullamcorper risus non sollicitudin gravida. In ac enim diam. Duis neque ante, faucibus eget tincidunt ut, aliquet nec ex. Proin commodo nulla placerat nisi vestibulum, vitae commodo velit fringilla. Morbi tincidunt facilisis massa sit amet blandit. Vestibulum at ipsum laoreet, iaculis mi sit amet, imperdiet lectus. Vivamus vehicula, lacus quis luctus varius, velit elit varius tellus, quis ultricies felis ex vel dui. Cras eget risus cursus, sodales diam eu, tempor lectus. Maecenas consequat ultrices leo. Nullam luctus et ante in commodo. Morbi mattis, neque sed dictum elementum, justo nisi congue ex, ut ultrices dui felis eu quam. Praesent pulvinar magna vel mi condimentum, et consequat neque pellentesque. Mauris lacinia, sapien at feugiat placerat, massa tellus luctus massa, eu cursus lectus massa sed arcu. Praesent pharetra est at erat convallis ultrices. Pellentesque dignissim interdum dolor at eleifend.</p>
<p>Vivamus non bibendum sapien. Aenean ac ante dignissim, aliquet erat ac, posuere nibh. Integer dapibus mi vitae sapien commodo malesuada. Suspendisse sed tellus sem. Vivamus vel nunc accumsan, laoreet tellus at, sagittis tellus. Phasellus euismod et ipsum nec hendrerit. Nam ultrices nunc at volutpat scelerisque. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque enim libero, placerat et mi id, facilisis sollicitudin arcu.</p>
<p>Integer maximus ex id ante interdum tempus. Sed mollis finibus facilisis. Suspendisse dolor mauris, ullamcorper vel magna non, auctor pretium mauris. Donec nisl nisi, ullamcorper id orci eu, tincidunt convallis quam. Nunc enim elit, hendrerit ut ornare eu, tincidunt a nibh. Donec a magna eget risus sagittis finibus. Integer malesuada dictum lorem vitae imperdiet. Mauris sit amet interdum orci, eu tincidunt eros. Cras pellentesque risus diam. Ut non augue vitae tortor venenatis vehicula vel vitae ligula. Morbi molestie ante sit amet ante vehicula mattis. Vestibulum gravida tempor vulputate.</p>
<p>Curabitur efficitur semper ligula vitae suscipit. Quisque odio nibh, interdum et enim vel, efficitur cursus odio. Ut euismod sit amet nibh a vestibulum. Sed at volutpat nibh, a lobortis augue. Sed tempor orci tempor, pharetra dolor at, porttitor tellus. Fusce nec iaculis augue. Proin dapibus ante eu justo condimentum convallis. Nam vel felis nec ligula condimentum molestie. Phasellus posuere in eros nec aliquam. Nulla id eros luctus, egestas elit quis, vehicula eros. Fusce dapibus euismod metus et vulputate. Maecenas tincidunt arcu a ipsum vehicula vulputate.</p>',
    GETDATE(), 'Статистикийн тайлан', 1, GETDATE()),
    ('<p><img src="https://cdn.newsbook.com.mt/wp-content/uploads/2019/06/image_of_technology_wavegraph-673266772.jpg" alt="" width="700" height="210" /></p>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et justo nec ante faucibus euismod. Sed tempus tellus id magna blandit, eu interdum sapien mattis. Nullam nec sapien dui. Integer in ornare lorem, laoreet commodo nulla. Ut consequat diam ultrices dui elementum blandit. Suspendisse magna urna, ornare ut eros eu, porttitor fringilla mauris. Duis pulvinar, turpis ut pulvinar rutrum, nisl risus viverra nunc, eget consequat mi neque id magna.</p>
<p>Pellentesque ultricies sem dui, eget consectetur libero convallis at. Pellentesque ullamcorper risus non sollicitudin gravida. In ac enim diam. Duis neque ante, faucibus eget tincidunt ut, aliquet nec ex. Proin commodo nulla placerat nisi vestibulum, vitae commodo velit fringilla. Morbi tincidunt facilisis massa sit amet blandit. Vestibulum at ipsum laoreet, iaculis mi sit amet, imperdiet lectus. Vivamus vehicula, lacus quis luctus varius, velit elit varius tellus, quis ultricies felis ex vel dui. Cras eget risus cursus, sodales diam eu, tempor lectus. Maecenas consequat ultrices leo. Nullam luctus et ante in commodo. Morbi mattis, neque sed dictum elementum, justo nisi congue ex, ut ultrices dui felis eu quam. Praesent pulvinar magna vel mi condimentum, et consequat neque pellentesque. Mauris lacinia, sapien at feugiat placerat, massa tellus luctus massa, eu cursus lectus massa sed arcu. Praesent pharetra est at erat convallis ultrices. Pellentesque dignissim interdum dolor at eleifend.</p>
<p>Vivamus non bibendum sapien. Aenean ac ante dignissim, aliquet erat ac, posuere nibh. Integer dapibus mi vitae sapien commodo malesuada. Suspendisse sed tellus sem. Vivamus vel nunc accumsan, laoreet tellus at, sagittis tellus. Phasellus euismod et ipsum nec hendrerit. Nam ultrices nunc at volutpat scelerisque. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque enim libero, placerat et mi id, facilisis sollicitudin arcu.</p>
<p>Integer maximus ex id ante interdum tempus. Sed mollis finibus facilisis. Suspendisse dolor mauris, ullamcorper vel magna non, auctor pretium mauris. Donec nisl nisi, ullamcorper id orci eu, tincidunt convallis quam. Nunc enim elit, hendrerit ut ornare eu, tincidunt a nibh. Donec a magna eget risus sagittis finibus. Integer malesuada dictum lorem vitae imperdiet. Mauris sit amet interdum orci, eu tincidunt eros. Cras pellentesque risus diam. Ut non augue vitae tortor venenatis vehicula vel vitae ligula. Morbi molestie ante sit amet ante vehicula mattis. Vestibulum gravida tempor vulputate.</p>
<p>Curabitur efficitur semper ligula vitae suscipit. Quisque odio nibh, interdum et enim vel, efficitur cursus odio. Ut euismod sit amet nibh a vestibulum. Sed at volutpat nibh, a lobortis augue. Sed tempor orci tempor, pharetra dolor at, porttitor tellus. Fusce nec iaculis augue. Proin dapibus ante eu justo condimentum convallis. Nam vel felis nec ligula condimentum molestie. Phasellus posuere in eros nec aliquam. Nulla id eros luctus, egestas elit quis, vehicula eros. Fusce dapibus euismod metus et vulputate. Maecenas tincidunt arcu a ipsum vehicula vulputate.</p>',
    GETDATE(), 'Холбоо барих', 1, GETDATE())
GO

INSERT INTO navbars
    (name)
VALUES
    ('Үндсэн меню'),
    ('Туслах меню')
GO

INSERT INTO navitems
    (link, linked, name, parent, published, sort, navbar_id)
VALUES
    ('/', 0, 'Статистик', 0, 1, 1, 1),
        ('/home/read/3', 1, 'Үндэсний тооцоо', 1, 1, 2, 1),
        ('/home/read/3', 1, 'Гадаад худалдаа', 1, 1, 3, 1),
        ('/home/read/3', 1, 'Эрүүл мэнд', 1, 1, 4, 1),
        ('/home/read/3', 1, 'Мал аж ахуй', 1, 1, 5, 1),
        ('/home/read/3', 1, 'Хэрэглээний үнэ', 1, 1, 6, 1),

    ('/', 0, 'Mэдээллийн сан', 0, 1, 7, 1),
        ('/home/read/1', 1, 'Аялал жуулчлал', 7, 1, 8, 1),
        ('/home/read/1', 1, 'Аж үйлдвэр', 7, 1, 9, 1),
        ('/home/read/1', 1, 'Газар тариалан', 7, 1, 10, 1),

    ('/home/read/3', 1, 'Нээлттэй мэдээлэл', 0, 1, 11, 1),
    ('/home/read/3', 1, 'Судалгаа', 0, 1, 12, 1),
    ('https://maps.google.mn/', 0, 'Газарзүйн мэдээллийн сан', 0, 1, 13, 1),


    ('/home/read/1', 1, 'Бидний тухай', 0, 1, 0, 2),
    ('/home/read/2', 1, 'Танилцуулга', 0, 1, 1, 2),
    ('/home/read/4', 1, 'Холбоо барих', 0, 1, 2, 2)
GO

