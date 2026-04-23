from sqlalchemy.ext.asyncio import create_async_engine, async_sessionmaker

DB_USER='postgres'
DB_PASSWORD='Chehov49'
DB_HOST='localhost'
DB_PORT=5000
DB_NAME='Project'

DATABASE_URL = f"postgresql+asyncpg://{DB_USER}:{DB_PASSWORD}@{DB_HOST}:{DB_PORT}/{DB_NAME}"

engine = create_async_engine(DATABASE_URL)
async_session_maker  = async_sessionmaker(engine, expire_on_commit=False)

