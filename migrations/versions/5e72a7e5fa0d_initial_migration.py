"""Initial migration.

Revision ID: 5e72a7e5fa0d
Revises: 
Create Date: 2021-04-07 18:06:50.039075

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '5e72a7e5fa0d'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('RepoStrings', sa.Column('user_name', sa.String(), nullable=False))
    op.create_unique_constraint(None, 'RepoStrings', ['user_name'])
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_constraint(None, 'RepoStrings', type_='unique')
    op.drop_column('RepoStrings', 'user_name')
    # ### end Alembic commands ###