CREATE DATABASE IF NOT EXISTS ideaedge_db
  CHARACTER SET = utf8mb4
  COLLATE = utf8mb4_general_ci
;

CREATE USER IF NOT EXISTS 'ideaedge_user'@'localhost'
  IDENTIFIED BY 'ideaEdge'
  PASSWORD EXPIRE NEVER
;

GRANT ALL ON ideaedge_db.* TO 'ideaedge_user'@'localhost';
