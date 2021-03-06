"""empty message

Revision ID: a190175a7122
Revises: 5664e569fdf6
Create Date: 2019-11-27 23:27:57.087894

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = "a190175a7122"
down_revision = "5664e569fdf6"
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column("users", sa.Column("admin", sa.Boolean(), nullable=True))
    op.execute("UPDATE users SET admin=False")
    op.alter_column("users", "admin", nullable=False)
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column("users", "admin")
    # ### end Alembic commands ###
