
# 常用SQL语句

# 创建表
```sql
 CREATE TABLE dy_user(id int,name varchar(255),password varchar(255))
```

# 增
```sql
 -- 新增加一条数据
 let addSQL = INSERT INTO dy_user(name,password) VALUES(?,?)
 let value  = ['鸿基',md5('123456')]
```
# 删
```sql
 DELETE FROM websites where id=6 --删除id为6的数据
 DELETE FROM dy_user where id in(10,11,12) -- 删除id=10与id=11与id=12的数据
```
# 改
```sql
 -- 将id为6的数据改为下面数据
 let changeSQL = UPDATE dy_user SET name = ?,password = ? WHERE Id = ?
 let value  = ['哈哈哈', '123',6]
```
# 查
```sql
 SELECT * FROM dy_user  --查找dy_user表中的所有数据
 SELECT * FROM dy_user WHERE id=1 --查找id为1的元素
 -- % ：表示任意0个或多个字符。可匹配任意类型和长度的字符，有些情况下若是中文，请使用两个百分号（%%）表示。
 SELECT * FROM dy_user WHERE name LIKE '%梦%' --查找name中含有梦的所有数据
 SELECT * FROM dy_user WHERE u_name LIKE '%三%' AND u_name LIKE '%猫%' --既含有三又含有猫
 SELECT * FROM dy_user WHERE u_name LIKE '三__'; --name为三个字且第一个字是“三”的；

```

# 总结汇总

```
    SQL模糊查询，使用like比较关键字，加上SQL里的通配符，请参考以下：
    1、LIKE'Mc%' 将搜索以字母 Mc 开头的所有字符串（如 McBadden）。
    2、LIKE'%inger' 将搜索以字母 inger 结尾的所有字符串（如 Ringer、Stringer）。
    3、LIKE'%en%' 将搜索在任何位置包含字母 en 的所有字符串（如 Bennet、Green、McBadden）。
    4、LIKE'_heryl' 将搜索以字母 heryl 结尾的所有六个字母的名称（如 Cheryl、Sheryl）。
    5、LIKE'[CK]ars[eo]n' 将搜索下列字符串：Carsen、Karsen、Carson 和 Karson（如 Carson）。
    6、LIKE'[M-Z]inger' 将搜索以字符串 inger 结尾、以从 M 到 Z 的任何单个字母开头的所有名称（如 Ringer）。
    7、LIKE'M[^c]%' 将搜索以字母 M 开头，并且第二个字母不是 c 的所有名称（如MacFeather）。
```